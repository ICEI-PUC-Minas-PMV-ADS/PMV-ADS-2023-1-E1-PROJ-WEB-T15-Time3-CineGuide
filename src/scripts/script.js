
const icon = document.querySelector('#burguer')
const menu = document.querySelector('#menu-mobile')

icon.addEventListener ('click', clickMenu )

function clickMenu() {
    if (menu.style.display == 'block'){
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}

