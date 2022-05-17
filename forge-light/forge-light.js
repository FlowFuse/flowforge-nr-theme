module.exports = function (RED) {
    console.log('hello from forge-light')
    RED.plugins.registerPlugin('forge-light', {
        type: 'node-red-theme',
        css: [
            'forge-light/forge-light-theme.css',
            'common/forge-common.css',
            'common/scrollbars.min.css',
            'common/ff-nr.png',
            'common/favicon-16x16.png',
            'common/favicon-32x32.png',
            'common/favicon.ico'
        ],
        lib: 'monaco',
        monacoOptions: {
            theme: require('./forge-light-monaco.json'),
            fontSize: 14,
            fontLigatures: true,
            fontFamily: "Cascadia Code, Fira Code, Consolas, 'Courier New', monospace",
            fontWeight: '300',
            colorDecorators: true,
            dragAndDrop: true,
            linkedEditing: true,
            showFoldingControls: 'always',
            'bracketPairColorization.enabled': true
        },
        header: {
            image: 'common/ff-nr.png',
            metoo: 'meetoo'
        },
        editorTheme: {
            header: {
                image: '/common/ff-nr.png',
                methree: 'meethree'
            }
        },
        scripts: ['forge-light/forge-light-customisations.js']
    })
}
