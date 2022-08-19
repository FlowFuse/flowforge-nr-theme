module.exports = function (RED) {
    RED.plugins.registerPlugin('forge-light', {
        type: 'node-red-theme',
        scripts: [
            'common/forge-common.js'
            // /* optional */ 'forge-light/forge-light-custom.js'
        ],
        css: [
            'common/forge-common.css',
            'forge-light/forge-light-theme.css'
            // /* optional */ 'forge-light/forge-light-custom.css'
        ],
        settings: {
            theme: {
                value: 'forge-light',
                exportable: true
            },
            headerImage: {
                value: 'resources/@flowforge/nr-theme/ff-nr.png',
                exportable: true
            },
            favicon: {
                value: 'resources/@flowforge/nr-theme/favicon-16x16.png',
                exportable: true
            },
            launcherVersion: {
                exportable: true
            },
            forgeURL: {
                exportable: true
            },
            projectURL: {
                exportable: true
            }
        },
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
