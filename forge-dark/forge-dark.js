module.exports = function (RED) {
    RED.plugins.registerPlugin('forge-dark', {
        type: 'node-red-theme',
        css: [
            'forge-dark/forge-dark-theme.css',
            'common/forge-common.css',
            'common/scrollbars.min.css',
            'common/ff-nr.png',
            'common/favicon-16x16.png',
            'common/favicon-32x32.png',
            'common/favicon.ico'
        ],
        monacoOptions: {
            theme: require('./forge-dark-monaco.json'),
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
        scripts: ['forge-dark/forge-dark-customisations.js']
    })
}
