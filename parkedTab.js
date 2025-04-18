
document.addEventListener('DOMContentLoaded', () => {
    
    const params = new URLSearchParams(window.location.search)
    
    const getParam = (name, fallback) => {
        
        const value = params.get(name)
            ? decodeURIComponent(params.get(name))
            : fallback
        
        return typeof fallback === 'object'
            ? JSON.parse(value)
            : value
        
    }
    
    const id = getParam('id', 'No ID provided')
    const url = getParam('url', 'No URL provided')
    const title = getParam('title', 'No URL provided')
    const debugInformation = getParam('debug', {})
    const options = getParam('options', {})
    
    const elements = getElementsByIds('id', 'title', 'url')
    
    elements.id.textContent = id
    elements.title.textContent = title
    elements.url.href = url
    elements.url.textContent = url
    
    document.title = `Parked: ${title}`
    
    console.log('DEBUG', options)
    
    setEffectiveTheme(options.theme)
    
    const debugHeader = document.getElementById('debug-header')
    
    if (options.showDebug) {
        
        console.log('Showing debug info')
        
        debugHeader.addEventListener('click', () => {
            
            const debug = document.getElementById('debug')
            const isOpen = debug.textContent?.toString()?.trim()?.length > 0
            
            if (isOpen) {
                debugHeader.textContent = 'Show Debug Information'
                debug.textContent = ''
            } else {
                debugHeader.textContent = 'Hide Debug Information'
                debug.textContent = JSON.stringify(debugInformation, null, 4) 
            }
            
        })
        
    } else {
        
        console.log('Hiding debug info')
        debugHeader.classList.add('hidden')
        
    }
    
    if (!document.getElementById('options-wrap').classList.contains('hidden'))
        document.getElementById('options').textContent = JSON.stringify(options, null, 4)
    
})
