  
    // Adiciona ou remove a classe "scroll" no header dependendo do scroll da página
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrolled = window.scrollY;
  
    // Adiciona ou remove a classe "scroll" no header dependendo do scroll da página
    if (scrolled > 0) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  });


// Menu responsivo
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

