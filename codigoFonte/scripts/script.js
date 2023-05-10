console.log ("script vinculado")

const menu = document.querySelector('#burguer')
const itens = document.querySelector('#itens')

menu.addEventListener ('click', clickMenu )

function clickMenu() {
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

