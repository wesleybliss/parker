
const createQueryString = (...maps) => {
    
    const params = new URLSearchParams()
    
    const appendValue = (key, value) => {
        
        if (Array.isArray(value)) {
            
            value.forEach(v => {
                if (v)
                    params.append(key, v)
            })
            
        } else if (value) {
            
            params.append(key, value)
            
        }
        
    }
    
    maps.forEach(map => {
        
        if (Array.isArray(map))
            map.forEach(([key, value]) => appendValue(key, value))
        else
            Object.keys(map).forEach(it => appendValue(it, map[it]))
        
    })
    
    return params.toString()?.length ? `?${params.toString()}` : ''
    
}

chrome.action.onClicked.addListener(tab => {
    
    const options = {
        id: tab.id,
        url: encodeURIComponent(tab.url),
        title: encodeURIComponent(tab.title),
        debug: JSON.stringify(tab),
    }
    
    chrome.storage.sync.get('options', data => {
        
        options.options = JSON.stringify(data.options)
        
        const query = createQueryString(options)
        const parkedUrl = chrome.runtime.getURL(`parkedTab.html${query}`)
        
        if (data.showLink)
            console.log('Current tab URL:', tab.url)
        
        chrome.tabs.update(tab.id, { url: parkedUrl })
        
    })
    
})
