(function () {
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
        console.log('hello from customisations')
        // eslint-disable-next-line quotes
        const headerIcon = `data:image/png;base64,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`
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
