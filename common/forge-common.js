(function () {
    /* global RED */

    // monitorInsertion derived from https://github.com/naugtur/insertionQuery/blob/master/insQ.min.js (MIT License Copyright (c) 2014-present Zbyszek Tenerowicz <naugtur@gmail.com>)
    // eslint-disable-next-line
    const monitorInsertion = (function () { 'use strict'; let m = 100; let t = !1; let u = 'animationName'; let d = ''; const n = 'Webkit Moz O ms Khtml'.split(' '); let e = ''; const i = document.createElement('div'); const s = { strictlyNew: !0, timeout: 20, addImportant: !1 }; if (i.style.animationName && (t = !0), !1 === t) for (let o = 0; o < n.length; o++) if (void 0 !== i.style[n[o] + 'AnimationName']) { e = n[o], u = e + 'AnimationName', d = '-' + e.toLowerCase() + '-', t = !0; break } function c (t) { return s.strictlyNew && !0 === t.QinsQ } function r (t, n) { function e (t) { t.animationName !== o && t[u] !== o || c(t.target) || n(t.target) } let i; var o = 'insQ_' + m++; const r = s.addImportant ? ' !important' : ''; (i = document.createElement('style')).innerHTML = '@' + d + 'keyframes ' + o + ' {  from {  outline: 1px solid transparent  } to {  outline: 0px solid transparent }  }\n' + t + ' { animation-duration: 0.001s' + r + '; animation-name: ' + o + r + '; ' + d + 'animation-duration: 0.001s' + r + '; ' + d + 'animation-name: ' + o + r + ';  } ', document.head.appendChild(i); const a = setTimeout(function () { document.addEventListener('animationstart', e, !1), document.addEventListener('MSAnimationStart', e, !1), document.addEventListener('webkitAnimationStart', e, !1) }, s.timeout); return { destroy: function () { clearTimeout(a), i && (document.head.removeChild(i), i = null), document.removeEventListener('animationstart', e), document.removeEventListener('MSAnimationStart', e), document.removeEventListener('webkitAnimationStart', e) } } } function a (t) { t.QinsQ = !0 } function f (t) { if (t) for (a(t), t = t.firstChild; t; t = t.nextSibling) void 0 !== t && t.nodeType === 1 && f(t) } function l (t, n) { let e; let i = []; const o = function () { clearTimeout(e), e = setTimeout(function () { i.forEach(f), n(i), i = [] }, 10) }; return r(t, function (t) { if (!c(t)) { a(t); const n = (function t (n) { return c(n.parentNode) || n.nodeName === 'BODY' ? n : t(n.parentNode) }(t)); i.indexOf(n) < 0 && i.push(n), o() } }) } function v (n) { return !(!t || !n.match(/[^{}]/)) && (s.strictlyNew && f(document.body), { every: function (t) { return r(n, t) }, summary: function (t) { return l(n, t) } }) } return v.config = function (t) { for (const n in t)t.hasOwnProperty(n) && (s[n] = t[n]) }, v }()); typeof module !== 'undefined' && void 0 !== module.exports && (module.exports = monitorInsertion)

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

    window.addEventListener('load', (_event) => {
        // Temporary - update dashboard plugin sidebar colours (PR in dashboard to use NR vars)
        const root = document.documentElement
        root.style.setProperty('--nr-db-dark-text', 'unset') // use NR theme colours
        root.style.setProperty('--nr-db-light-text', 'unset') // use NR theme colours
        root.style.setProperty('--nr-db-disabled-text', 'unset') // use NR theme colours
        root.style.setProperty('--nr-db-grey-text', '#414249')

        // eslint-disable-next-line quotes
        const favicon32 = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADzUlEQVR4AcXB206UVxzG4d+71jcbBmYGpjJIg2iHiNYEJaSKrQe4QeMNcOaR11BP2wuwV2JvQSMkxFAiGk1Q8UCjAoJsAkgRZuZb/wJtk6YtuEN4Ht3o7f0B+AXoBhy7w4Bh4FoEXAe+Z3cJ6AauO+Ake+c7B0TsHe/YY4495thjjj0WsdvMMNaZsSHiC7MQwAwkXBSZT6eJ0ml8MmlyziK+ADODEPDJpNU0N1t9qUT94cPkWlvJNDaSzGbxqZTkHBE7yOIYeU/d/v2h2NVFc3c3De3tShcKOO/Ffynic5lhIRDV1FjhyBFr6emh+dQpMk1NTs7xPhGfyEJgQyqft6auLjt48SL7OjqUyGTER4j4CBYCmOGiyOpaWqz59GlrPXdO9W1tcomEeB8z4nLZqqurhEoFC4HI4pgtSWyQc/h02moKBWtob2f/yZNW7OxUTWOjl8R24nLZlicnbe7RI+bHxmx5fFxri4vE5bIsBKJvr1wxzLAQYlsnkLx38t58MkmUTiuZy1Hb1ERtc7PSDQ3Ie8d2zHg3N2dTd++GicFBzY+NaW1hQRbHbJLYJBF1XL3q+FPEZ7I4tsUXL+xVf79NDA7q7fi4s2pVcg4k5D3/FrEDQqVibx48CC9v3tTUyIhW5+cd6+Qc8p7tOHZAqFRs8flz5p8+ZW1hQZghiQ8RsQOiTMYd6evj4IUL9np4OLy8dYu5x49VXVkRziGJrUTjAwO2KYQYEOvknJP35hMJ+XSaVD5PuqFByWwWeS+2kC4U9M3lyzrQ02Ozo6M2PjAQpu/d08rMjKxaFRKS2CSxQb9euhTMTJgZGyQEQjIknPf4VIp0Q4PlDh2i8cQJKx4/rrqWFrkoEtuwEOz36WmbffjQ3ty/r4Vnz1hbWFB1dZVQrWIhoBu9vQEQ2zHDzMAMOUe6ULB9HR124OxZip2dSmaz4j0sBKssL7O2tGSVt2+prKwQl8tEfAgJSfzt3fy8Xt2+rck7d6y+rc1az5+3r8+cobZYdEj8HzmnZC5HMpcT/+D7SqWfAPERJCHnsBC0MjOj6ZERvR4asnczMyFRV0cqn0feiw/g+0qlnwHxiSSxYW1xUbOjo25icJD5J08slMuWqKsjUVODnBNbiNghco4N5aUlTQwOanJoyGqLRQpHj9pXx46FfKmkTLFIMpuVT6Vw3oNzROw0CXkPZlqemmJ5clIv+/uJUilLZrOk8nlL5nJEmQw+kSACYsDxBUgC79kQl8tamZ1lZWZGmPGX2AHD7BJJyDnkPfIeeX/XAdeAO0Bg9wTgN+DHPwAIHJAeMJ00fgAAAABJRU5ErkJggg==`
        // eslint-disable-next-line quotes
        const headerIcon = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAM1BMVEX////tTk7tTk7tTk7tTk7tTk7tTk7tTk7tTk7tTk7tTk7tTk7tTk7tTk7tTk7tTk7tTk7wuqG8AAAAEXRSTlMAEHDA/9DwgLBAkOCgYDAgUObIcXUAAAK1SURBVHic7ZtZguwgCEWdjZn3v9rWdL0aXmUQAvrR3gWEIygRVCGSpNKmsKyS4inlSptPcv5hXnY1zCfpXydUsx8JNv/Xs29MjIKsEv9/crKuA4xRovj6+5QVde0b0wAaQANoAA2gATSABtAAGkADaAANoAE0gL8H4HTnfQjh2SMsaFv3Krx1J4sCDOM0f5kuBeDGaTkwXgDA+qORlwCw6mzo3ABDjnU2ADdeeZ4VwE651jkAAIPnALDTd6opCDCGa4N8AM5DB08KMEAmHj2ARvieEGDMSzlMAMjQUwGAcg49AGbZ0QEMN32/KaABxhVncQnKa/06KsMBaHDCTZKr11+nlAgAnfmj/1To7e7XgABxc4kYu1zHw/NZAIA931weah3PvnoNMMQpE0sJ2E/+qfl47A+AcCKczZfktB/3DwA+XQ6eF2DKPBXnsS599q0EDvPz6bRnB1hhNxKIrctpAJknBlh6+IUUQvMBdR+Iyjrc97QAAX0ZiAgAFX5SgKiMxM8LEAMByUAcAJhIEAPAlwM5gAAmYw6AGIn8ycADkG6pZkaCCyBqzUrN255w9f9rJdkWLv21G3K25Vr3PiBbAJduyK8LnPYrqiBTpxkSWBld9573tJwwwGtDh6qL5dTt50hUdexwjYlZ7UBg+wNDj5yVc1B+1K8y/UaHRN9tD83bOscDxFBg3fCuOwBR3e0K9iZA6tFW7RMmOV+1U7oJeEhBDxDXBLJtR3hegJwMdADIZUkJYDDLkhggHVjCIkEOYIBNdA6A1EnPng08ACb/BJENIHfrwgjwy3DlB16AJK1O8zQ/QJTr/OHCKAKwyY671UU5gAdGrHKm8EZSGuBdOurvXeVqAA3gC6D6g8fqTz6rP3qt/uxXCESHmUrbw+f6T7+FyD9mpNTz8bu4bKVxyD5uoPwAsQDGrgy9MzoAAAAddEVYdFNvZnR3YXJlAEBsdW5hcGFpbnQvcG5nLWNvZGVj9UMZHgAAAABJRU5ErkJggg==`

        // set favicon
        changeFavicon(favicon32)

        monitorInsertion('#red-ui-header > span.red-ui-header-logo > img').summary(function (_arrayOfInsertedNodes) {
            console.log('updating red-ui-header-logo > img')
            $('#red-ui-header > span.red-ui-header-logo > img').attr('src', headerIcon)
        })
        monitorInsertion('#red-ui-header-button-sidemenu').summary(function (_arrayOfInsertedNodes) {
            if (!RED) { return }
            const img = $('#red-ui-header > span > img')
            const ownerHref = img.parent().prop('href')
            if (ownerHref) {
                const mainURL = new URL(ownerHref)
                // add Manage flowforge link
                RED.menu.addItem('red-ui-header-button-sidemenu', {
                    id: 'usermenu-item-ffoverview',
                    label: 'Manage FlowForge',
                    onselect: function () {
                        window.location = mainURL.origin
                    }
                })
            }
            // add flowforge.com link
            RED.menu.addItem('red-ui-header-button-sidemenu', {
                id: 'usermenu-item-ffsite',
                label: 'FlowForge Website',
                onselect: function () {
                    window.location = 'https://flowforge.com/'
                }
            })
        })
        monitorInsertion('#red-ui-header-button-user').summary(function (_arrayOfInsertedNodes) {
            if (!RED) { return }
            const img = $('#red-ui-header > span > img')
            const ownerHref = img.parent().prop('href')
            console.log('updating header-button-user')
            if (ownerHref) {
                // add link to this project settings on flowforge
                RED.menu.addItem('red-ui-header-button-user', {
                    id: 'usermenu-item-ffmain',
                    label: 'Project Settings',
                    onselect: function () {
                        window.location = ownerHref
                    }
                })
            }
        })
        monitorInsertion('#node-dialog-login-image').summary(function (_arrayOfInsertedNodes) {
            console.log('updating login-image')
            $('#node-dialog-login-image')
                .attr('src', headerIcon)
                .css('width', '170')
                .css('height', '170')
                .css('padding', '0px 6px 16px 0px')
                .css('margin', 'auto')
                .parent() // img's parent div
                .css('width', '178')
                .css('display', 'flex')
                .parent() // content div
                .css('display', 'flex')
                .css('flex-direction', 'row')
                .css('align-items', 'flex-end')
        })
    })
})()
