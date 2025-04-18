
let systemThemeMediaQuery = null

const applyTheme = themePreference => {

    document.body.classList.remove('light-theme', 'dark-theme')

    if (themePreference === 'light') {
        document.body.classList.add('light-theme')
        console.log('Applied light theme')
    } else if (themePreference === 'dark') {
        document.body.classList.add('dark-theme')
        console.log('Applied dark theme')
    }

}

const handleSystemThemeChange = e => {

    console.log('System theme preference changed or checked')
    applyTheme(e.matches ? 'dark' : 'light')

}

const setEffectiveTheme = theme => {

    const userThemeSetting = theme || 'system' // Default to 'system'

    // Clean up previous listener if switching away from system theme
    if (systemThemeMediaQuery) {
        systemThemeMediaQuery.removeEventListener('change', handleSystemThemeChange)
        systemThemeMediaQuery = null
        console.log('Removed system theme listener')
    }

    if (userThemeSetting === 'light')
        return applyTheme('light')
    if (userThemeSetting === 'dark')
        return applyTheme('dark')
    
    // Default to 'system' theme
    systemThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    handleSystemThemeChange(systemThemeMediaQuery) // Apply initial system theme
    
    systemThemeMediaQuery.addEventListener('change', handleSystemThemeChange) // Listen for changes
    // console.log('Added system theme listener')
    
}

const getElementsByIds = (...ids) => ids.reduce((acc, it) => ({
    ...acc,
    [it]: document.getElementById(it)
}), {})
