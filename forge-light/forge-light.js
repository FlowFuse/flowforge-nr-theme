module.exports = function (RED) {
    RED.plugins.registerPlugin('forge-light', {
        type: 'node-red-theme',
        scripts: [
            'forge-light/forge-light-customisations.js'
        ],
        css: [
            'forge-light/forge-light-theme.css',
            'common/forge-common.css'
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
        }
    })
}
