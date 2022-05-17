#!/usr/bin/env node

// This script can be used to build custom colour-scheme css files.
//
// 1. Create a copy of packages/node_modules/@node-red/editor-client/src/sass/colors.scss
//    and change the values to the desired colours.
//
// 2. Run this script, providing the path to the custom file using the --in option
//    and the output will be written to the location specified by the --out option
//

const os = require('os')
const nopt = require('nopt')
const path = require('path')
const fs = require('fs-extra')
const sass = require('sass')

const knownOpts = {
    help: Boolean,
    long: Boolean,
    in: [path],
    out: [path],
    src: [path]
}
const shortHands = {
    '?': ['--help']
}
nopt.invalidHandler = function (k, v, t) {}

const parsedArgs = nopt(knownOpts, shortHands, process.argv, 2)
const src = process.env.npm_config_src || parsedArgs.src
const argIn = process.env.npm_config_in || parsedArgs.in
const argOut = process.env.npm_config_out || parsedArgs.out
const long = !!(process.env.npm_config_long || parsedArgs.long)

if (!src || !argIn || !argOut || parsedArgs.help) {
    console.log('Usage: build [-?] [--in=FILE] [--out=FILE] [--src=PATH]')
    console.log('')
    console.log('Options:')
    console.log('  --in         FILE  Custom colors sass file')
    console.log('  --out        FILE  Where you write the result')
    console.log('  --src        PATH  Path to src of node-red')
    console.log('  --long       Do not compress the colors.scss file')
    console.log('  -?, --help   Show this help')
    console.log('')
    process.exit(parsedArgs.help ? 0 : 1)
}

const ruleRegex = /(\$.*?) *: *(\S[\S\s]*?);/g
let match

const customColors = {}

if (argIn && fs.existsSync(argIn)) {
    const customColorsFile = fs.readFileSync(argIn, 'utf-8')
    while ((match = ruleRegex.exec(customColorsFile)) !== null) {
        customColors[match[1]] = match[2]
    }
}

if (!fs.existsSync(src)) {
    throw new Error(`Node-RED directory '${src}' not found`)
}
if (!fs.existsSync(path.join(src, '/package.json'))) {
    throw new Error(`Node-RED path is not valid. Could not find '${path.join(src, '/package.json')}'`)
}
if (!fs.existsSync(path.join(src, '/packages/node_modules/@node-red/editor-client/src/sass'))) {
    throw new Error(`Node-RED path is not valid. Could not find '${path.join(src, '/packages/node_modules/@node-red/editor-client/src/sass')}'`)
}
// Load base colours
const colorsFile = fs.readFileSync(path.join(src, '/packages/node_modules/@node-red/editor-client/src/sass/colors.scss'), 'utf-8')
const updatedColors = []

while ((match = ruleRegex.exec(colorsFile)) !== null) {
    updatedColors.push(match[1] + ': ' + (customColors[match[1]] || match[2]) + ';')
}

(async function () {
    const tmpDir = os.tmpdir()
    const workingDir = await fs.mkdtemp(`${tmpDir}${path.sep}`)
    await fs.copy(path.join(src, '/packages/node_modules/@node-red/editor-client/src/sass/'), workingDir)
    await fs.writeFile(path.join(workingDir, 'colors.scss'), updatedColors.join('\n'))
    const result = sass.compile(path.join(workingDir, 'style.scss'), { outputStyle: 'expanded' })
    const css = result.css.toString()
    const lines = css.split('\n')
    const colorCSS = []
    const nonColorCSS = []

    let inKeyFrameBlock = false

    lines.forEach(l => {
        if (inKeyFrameBlock) {
            nonColorCSS.push(l)
            if (/^}/.test(l)) {
                inKeyFrameBlock = false
            }
        } else if (/^@keyframes/.test(l)) {
            nonColorCSS.push(l)
            inKeyFrameBlock = true
        } else if (!/^ {2}/.test(l)) {
            colorCSS.push(l)
            nonColorCSS.push(l)
        } else if (/color|border|background|fill|stroke|outline|box-shadow/.test(l)) {
            colorCSS.push(l)
        } else {
            nonColorCSS.push(l)
        }
    })

    const nrPkg = require(path.join(src, 'package.json'))
    const now = new Date().toISOString()

    const header = `/*
* Theme generated with Node-RED ${nrPkg.version} on ${now}
*/`

    const output = sass.compileString(colorCSS.join('\n'), { style: long ? 'expanded' : 'compressed' })
    if (argOut) {
        await fs.writeFile(argOut, header + '\n' + output.css)
    } else {
        console.log(header)
        console.log(output.css.toString())
    }
    await fs.remove(workingDir)
})()
