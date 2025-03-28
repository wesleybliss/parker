
// In-page cache of the user's options
const options = {
    showDebug: false,
}

const optionsForm = document.getElementById('optionsForm')

// Immediately persist options changes
optionsForm.showDebug.addEventListener('change', e => {
    options.showDebug = e.target.checked
    chrome.storage.sync.set({options})
    // console.log('Updated options', options)
})

// Initialize the form with the user's option settings
chrome.storage.sync.get('options').then(data => {
    
    // console.log('Read options', data.options)
    
    Object.assign(options, data.options)
    
    optionsForm.showDebug.checked = Boolean(options.showDebug)
    
})
