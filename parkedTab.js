
document.addEventListener('DOMContentLoaded', () => {
    
    const params = new URLSearchParams(window.location.search)
    
    const id = params.get('id')
        ? decodeURIComponent(params.get('id'))
        : 'No ID provided'
    
    const url = params.get('url')
        ? decodeURIComponent(params.get('url'))
        : 'No URL provided'
    
    const title = params.get('title')
        ? decodeURIComponent(params.get('title'))
        : 'No URL provided'
    
    const debugInformation = params.get('debug')
        ? JSON.parse(decodeURIComponent(params.get('debug')))
        : {}
    
    const options = params.get('options')
        ? JSON.parse(decodeURIComponent(params.get('options')))
        : {}
    
    document.getElementById('id').textContent = id
    document.getElementById('title').textContent = title
    
    document.getElementById('url').href = url
    document.getElementById('url').textContent = url
    
    document.title = `Parked: ${title}`
    
    console.log('DEBUG', JSON.stringify(options, null, 4))
    
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
