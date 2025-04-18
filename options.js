
// In-page cache of the user's options
const options = {
    showDebug: false,
    theme: 'system',
}

const updateOptions = value => {
    
    chrome.storage.sync.set({ options: value })
    console.log('Updated options', value)
    
}

const optionsForm = document.getElementById('optionsForm')

// Immediately persist options changes
optionsForm.showDebug.addEventListener('change', e => {
    options.showDebug = e.target.checked
    updateOptions(options)
})

optionsForm.theme.addEventListener('change', e => {
    options.theme = e.target.value
    updateOptions(options)
})

// Initialize the form with the user's option settings
chrome.storage.sync.get('options').then(data => {
    
    // console.log('Read options', data.options)
    Object.assign(options, data.options)
    
    optionsForm.showDebug.checked = Boolean(options.showDebug)
    optionsForm.theme.value = options.theme || 'system'
    
})
