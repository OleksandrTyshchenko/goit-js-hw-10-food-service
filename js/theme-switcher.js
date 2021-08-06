

import { menu } from './variables.js'


function themeLoader() {
    if (localStorage.getItem('currentTheme') === menu.Theme.DARK) {
        menu.siteTheme.classList.add(menu.Theme.DARK)
        menu.switcher.checked = true
    } else {
        menu.siteTheme.classList.add(menu.Theme.LIGHT)
    }
}

themeLoader()

function themeSwitcher(e) {
    e.preventDefault()
    if (menu.siteTheme.classList.contains(menu.Theme.LIGHT)) {
        menu.siteTheme.classList.remove(menu.Theme.LIGHT)
        menu.siteTheme.classList.add(menu.Theme.DARK)

    } else {
        menu.siteTheme.classList.remove(menu.Theme.DARK)
        menu.siteTheme.classList.add(menu.Theme.LIGHT)

    }
    localStorage.setItem('currentTheme', menu.siteTheme.classList.value)

}

menu.switcher.addEventListener('change', themeSwitcher)




