(function () {
    /* global RED */

    // Add "FlowForge" to main menu & user menu
    const ffURL = RED.settings.get('editorTheme.header.url')
    if (ffURL) {
        RED.menu.addItem('red-ui-header-button-sidemenu', {
            id: 'usermenu-item-ffoverview',
            label: 'FlowForge Overview',
            onselect: function () {
                window.location = ffURL
            }
        })
        const mainURL = new URL(ffURL)
        RED.menu.addItem('red-ui-header-button-user', {
            id: 'usermenu-item-ffmain',
            label: 'FlowForge',
            onselect: function () {
                window.location = mainURL.origin
            }
        })
    }
    RED.menu.addItem('red-ui-header-button-sidemenu', {
        id: 'usermenu-item-ffsite',
        label: 'FlowForge',
        onselect: function () {
            window.location = 'https://flowforge.com/'
        }
    })
    document.head = document.head || document.getElementsByTagName('head')[0]
    function changeFavicon (src) {
        const link = document.createElement('link')
        const oldLink = $('link[href="favicon.ico"]')[0] || $('#dynamic-favicon"]')[0]
        link.id = 'dynamic-favicon'
        link.rel = 'shortcut icon'
        link.href = src
        if (oldLink) {
            document.head.removeChild(oldLink)
        }
        document.head.appendChild(link)
    }
    window.addEventListener('load', (event) => {
        // Temporary - update dashboard plugin sidebar colours (PR in dashboard to use NR vars)
        const root = document.documentElement
        root.style.setProperty('--nr-db-dark-text', 'unset') // use NR theme colours
        root.style.setProperty('--nr-db-light-text', 'unset') // use NR theme colours
        root.style.setProperty('--nr-db-disabled-text', 'unset') // use NR theme colours
        root.style.setProperty('--nr-db-grey-text', '#414249')

        // update login dialog
        // eslint-disable-next-line quotes
        const headerIcon = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAM1BMVEX////tTk7tTk7tTk7tTk7tTk7tTk7tTk7tTk7tTk7tTk7tTk7tTk7tTk7tTk7tTk7tTk7wuqG8AAAAEXRSTlMAEHDA/9DwgLBAkOCgYDAgUObIcXUAAAK1SURBVHic7ZtZguwgCEWdjZn3v9rWdL0aXmUQAvrR3gWEIygRVCGSpNKmsKyS4inlSptPcv5hXnY1zCfpXydUsx8JNv/Xs29MjIKsEv9/crKuA4xRovj6+5QVde0b0wAaQANoAA2gATSABtAAGkADaAANoAE0gL8H4HTnfQjh2SMsaFv3Krx1J4sCDOM0f5kuBeDGaTkwXgDA+qORlwCw6mzo3ABDjnU2ADdeeZ4VwE651jkAAIPnALDTd6opCDCGa4N8AM5DB08KMEAmHj2ARvieEGDMSzlMAMjQUwGAcg49AGbZ0QEMN32/KaABxhVncQnKa/06KsMBaHDCTZKr11+nlAgAnfmj/1To7e7XgABxc4kYu1zHw/NZAIA931weah3PvnoNMMQpE0sJ2E/+qfl47A+AcCKczZfktB/3DwA+XQ6eF2DKPBXnsS599q0EDvPz6bRnB1hhNxKIrctpAJknBlh6+IUUQvMBdR+Iyjrc97QAAX0ZiAgAFX5SgKiMxM8LEAMByUAcAJhIEAPAlwM5gAAmYw6AGIn8ycADkG6pZkaCCyBqzUrN255w9f9rJdkWLv21G3K25Vr3PiBbAJduyK8LnPYrqiBTpxkSWBld9573tJwwwGtDh6qL5dTt50hUdexwjYlZ7UBg+wNDj5yVc1B+1K8y/UaHRN9tD83bOscDxFBg3fCuOwBR3e0K9iZA6tFW7RMmOV+1U7oJeEhBDxDXBLJtR3hegJwMdADIZUkJYDDLkhggHVjCIkEOYIBNdA6A1EnPng08ACb/BJENIHfrwgjwy3DlB16AJK1O8zQ/QJTr/OHCKAKwyY671UU5gAdGrHKm8EZSGuBdOurvXeVqAA3gC6D6g8fqTz6rP3qt/uxXCESHmUrbw+f6T7+FyD9mpNTz8bu4bKVxyD5uoPwAsQDGrgy9MzoAAAAddEVYdFNvZnR3YXJlAEBsdW5hcGFpbnQvcG5nLWNvZGVj9UMZHgAAAABJRU5ErkJggg==`
        $('#node-dialog-login').dialog('option', 'title', 'FlowForge')
        $('#node-dialog-login').dialog('option', 'width', 300)
        $('#node-dialog-login').dialog('option', 'height', 160)
        $('#node-dialog-login-image').attr('src', headerIcon)

        // eslint-disable-next-line quotes
        const favicon32 = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADzUlEQVR4AcXB206UVxzG4d+71jcbBmYGpjJIg2iHiNYEJaSKrQe4QeMNcOaR11BP2wuwV2JvQSMkxFAiGk1Q8UCjAoJsAkgRZuZb/wJtk6YtuEN4Ht3o7f0B+AXoBhy7w4Bh4FoEXAe+Z3cJ6AauO+Ake+c7B0TsHe/YY4495thjjj0WsdvMMNaZsSHiC7MQwAwkXBSZT6eJ0ml8MmlyziK+ADODEPDJpNU0N1t9qUT94cPkWlvJNDaSzGbxqZTkHBE7yOIYeU/d/v2h2NVFc3c3De3tShcKOO/Ffynic5lhIRDV1FjhyBFr6emh+dQpMk1NTs7xPhGfyEJgQyqft6auLjt48SL7OjqUyGTER4j4CBYCmOGiyOpaWqz59GlrPXdO9W1tcomEeB8z4nLZqqurhEoFC4HI4pgtSWyQc/h02moKBWtob2f/yZNW7OxUTWOjl8R24nLZlicnbe7RI+bHxmx5fFxri4vE5bIsBKJvr1wxzLAQYlsnkLx38t58MkmUTiuZy1Hb1ERtc7PSDQ3Ie8d2zHg3N2dTd++GicFBzY+NaW1hQRbHbJLYJBF1XL3q+FPEZ7I4tsUXL+xVf79NDA7q7fi4s2pVcg4k5D3/FrEDQqVibx48CC9v3tTUyIhW5+cd6+Qc8p7tOHZAqFRs8flz5p8+ZW1hQZghiQ8RsQOiTMYd6evj4IUL9np4OLy8dYu5x49VXVkRziGJrUTjAwO2KYQYEOvknJP35hMJ+XSaVD5PuqFByWwWeS+2kC4U9M3lyzrQ02Ozo6M2PjAQpu/d08rMjKxaFRKS2CSxQb9euhTMTJgZGyQEQjIknPf4VIp0Q4PlDh2i8cQJKx4/rrqWFrkoEtuwEOz36WmbffjQ3ty/r4Vnz1hbWFB1dZVQrWIhoBu9vQEQ2zHDzMAMOUe6ULB9HR124OxZip2dSmaz4j0sBKssL7O2tGSVt2+prKwQl8tEfAgJSfzt3fy8Xt2+rck7d6y+rc1az5+3r8+cobZYdEj8HzmnZC5HMpcT/+D7SqWfAPERJCHnsBC0MjOj6ZERvR4asnczMyFRV0cqn0feiw/g+0qlnwHxiSSxYW1xUbOjo25icJD5J08slMuWqKsjUVODnBNbiNghco4N5aUlTQwOanJoyGqLRQpHj9pXx46FfKmkTLFIMpuVT6Vw3oNzROw0CXkPZlqemmJ5clIv+/uJUilLZrOk8nlL5nJEmQw+kSACYsDxBUgC79kQl8tamZ1lZWZGmPGX2AHD7BJJyDnkPfIeeX/XAdeAO0Bg9wTgN+DHPwAIHJAeMJ00fgAAAABJRU5ErkJggg==`
        // eslint-disable-next-line no-unused-vars, quotes
        const favicon16 = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB4ElEQVR4AZ3BS0sbURiA4fc758w4NunYXLRpFVPiQhE3QQgSyUrBlf/J31OhILgUxIXduBEqhKII3qBW471Jk3Tma6a0IKVK9Xnk/fz8BlADhKdRYNMAs4DwdAJUDWB4PuN4JlUFVRz/SxWNY8QYbBDgpVJqfR8HCI/QOCYRZDKam5xkqFzm1dgYQTaL6+vD8Q+qCnGMOEdYLOpIrcZIrUZYLIrxPO5zxlpVfpEexFr8dFoHSiWGZ2cpVCq8yOcFEVSV1vm5Xu/vc3t8TLfZxFWXltAeeoxz2CCgP5ulf3BQrO+TiNptrvb29Ghjgy9bW3w7PZWo3QZV3JuZGQGEB0Sdju6trOjn5WVpnZ2JGINYixhDwjXqdUVVkR5jcEFAXyaDn06LGIP1fXm3sECqUOBwfV3PP32ifX0tGkUk5MPiYsxvIoLxPIJcjtzEBG+rVfJTU+KlUiTibpfboyNt1OvcnpzQvbvD/Wg26RHu+X55ydXuLgdra2THx3V0bo5CpUJ/Pi8DpZIMlEr84RDhbyJCIup0+Lq9LWc7O7wcHtbX09M6VC4Tjo7ihyHG88QBMWB5gFgLqtwcHsrNwQH7q6v4Yah+GOKCIHbAJlADhEeIMSTiKKJ1cSGtRkM1jj/+BICRstcPkVsKAAAAAElFTkSuQmCC`
        changeFavicon(favicon32)
        const observer = new MutationObserver(function (mutationsList) {
            mutationsList.forEach(function (mutation) {
                mutation.addedNodes.forEach(function (addedNode) {
                    const el = $(addedNode)
                    if (el.is('img')) {
                        el.attr('src', headerIcon)
                        observer.disconnect()
                    }
                })
            })
        })
        observer.observe(document.querySelector('#red-ui-header > span.red-ui-header-logo'), { subtree: true, childList: true })
    })
})()
