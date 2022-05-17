window.addEventListener('load', (event) => {
    console.log('hello from customisations')
    const observer = new MutationObserver(function (mutationsList) {
        mutationsList.forEach(function (mutation) {
            mutation.addedNodes.forEach(function (addedNode) {
                const el = $(addedNode)
                if (el.is('img')) {
                    el.attr('src', 'theme/css/ff-nr.png')
                    observer.disconnect()
                }
            })
        })
    })
    observer.observe(document.querySelector('#red-ui-header > span.red-ui-header-logo'), { subtree: true, childList: true })
})
