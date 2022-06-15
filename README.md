# flowforge-nr-theme
A set of custom Node-RED themes used when running inside the FlowForge platform

## IMPORTANT - pre-release

This package is v0.0.1. It is a MVP with minimal styling to match the FlowForge header layout
and a hand full of colors copied from the FlowForge project to give it a very basic FlowForge
feel to see how it looks

## TODO

* Styling, colors, customisations, monaco theming, favicon and layout needs to be reviewed
* Integration with Node-RED (e.g. setting title, and any other items - see figma)
* FlowForge elements for selecting theme needs to be implemented with Node-RED (e.g.)

When done, the project can be updated to V1.0.0 and released to NPM


## Themes included

* forge-light
* forge-dark


## Install

### Install with npm

Run the following command from within the Node-RED user data directory (by default, `~/.node-red`).

```shell
npm install @flowforge/flowforge-nr-theme
```

### Usage

For a standard Node-RED installation 
* Set `theme: "forge-light"` in the `editorTheme` object in your `settings.js` then restart Node-RED.
OR
* Set `theme: "forge-dark"`  in the `editorTheme` object in your `settings.js` then restart Node-RED.

For FlowForge, select the theme in the project settings

Example...

```js
    editorTheme: {
        theme: "forge-light",
    },
```

## License
Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

## Development

To modify colors..
* Get the latest `colors.scss` file from node-red src
  * found in `/packages/node_modules/@node-red/editor-client/src/sass/`
  * Save it somewhere in this project
* Update the colors as required & save
* build the css using the `build.js` script e.g...
  * `node build.js --in=colors.scss --out=compiled.css --src=/src/node-red`

### Build

To build the package, run...

    npm run build --src=/home/nol/github/node-red

This will compile the `forge-light` and `forge-dark`

*NOTE: `/home/nol/github/node-red` is an example. Update this to your local src directory*