module.exports = function (RED) {
    RED.plugins.registerPlugin('forge-dark', {
        type: 'node-red-theme',
        scripts: [
            // /* optional */ 'common/forge-common.js'
            'forge-dark/forge-dark-custom.js'
        ],
        css: [
            'common/forge-common.css',
            'forge-dark/forge-dark-theme.css'
            // /* optional */ 'forge-light/forge-light-custom.css'
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
        }
    })
}
