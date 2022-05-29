module.exports = function (RED) {
    RED.plugins.registerPlugin('forge-light', {
        type: 'node-red-theme',
        scripts: [
            // /* optional */ 'common/forge-common.js'
            'forge-light/forge-light-custom.js'
        ],
        css: [
            'common/forge-common.css',
            'forge-light/forge-light-theme.css'
            // /* optional */ 'forge-light/forge-light-custom.css'
        ],
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
        }
    })
}
