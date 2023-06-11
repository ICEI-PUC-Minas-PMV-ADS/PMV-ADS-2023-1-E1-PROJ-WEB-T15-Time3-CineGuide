console.log('ScriptVinculado')
let main = document.querySelector('main')


function renderFavorites(){
    const favoriteList = localStorage.getItem('favoritos')
    if (favoriteList) {
        const favorites = JSON.parse(favoriteList)
        console.log(favorites)
        const cards_container = document.createElement('div')
        cards_container.classList.add('films-cards-container')
        main.appendChild(cards_container)
        favorites.forEach(film => {
            const filmCard = document.createElement('div')
            filmCard.classList.add('movie-card')
      
            const image = document.createElement('img')
            image.src = `https://image.tmdb.org/t/p/w342/${film.posterPath}`
            const title = document.createElement('h3')
            title.textContent = film.title
            const originalTitle = document.createElement('h5')
            originalTitle.textContent = film.originalTitle
            const releaseDate = document.createElement('h6')
            releaseDate.textContent = `Lançamento: ${dateConvert(film.releaseDate)}`
      
            const filmNote = document.createElement('h6')
            filmNote.textContent = `Nota: ${parseFloat(film.voteAverage.toFixed(2))}/10`
            const buttonsWrapper = document.createElement('div')
            buttonsWrapper.classList.add('note-favorite')
            const removeBtn = document.createElement('button')
            removeBtn.textContent = "Remover"
            const sinopseButton = document.createElement('button')
            sinopseButton.textContent = 'Ver mais'
            buttonsWrapper.append(removeBtn, sinopseButton)
            filmCard.append(image, title, originalTitle, releaseDate, filmNote, buttonsWrapper)
            sinopseButton.addEventListener('click', () => { renderOverview(film.backdropPath, film.title, film.overview, film.genre) })
            cards_container.appendChild(filmCard);
            
            removeBtn.addEventListener('click', () =>{filmCard.remove() })
            removeBtn.addEventListener('click', () => {
                const index = favorites.findIndex(card => card.id === film.id)
                if (index !== -1) {
                    favorites.splice(index, 1)
                    localStorage.setItem('favoritos', JSON.stringify(favorites))
                 }
                 })
        });
     }
     else{
        const mensage = document.createElement('h2')
        mensage.textContent = 'Nenhum filme foi adicionado aos favoritos.'
        main.appendChild(mensage)
     }

     
}

renderFavorites ()

function dateConvert(date) {
    const partesData = date.split('-');
    const ano = partesData[0];
    const mes = partesData[1];
    const dia = partesData[2];
    return `${dia}/${mes}/${ano}`;
  }

  function renderOverview(backdrop_path, title, overview, genres) {
    const card_modal = document.createElement('div')
    card_modal.classList.add('modal-movie-card')
    const body = document.querySelector('body')
    body.appendChild(card_modal)
  
    card_modal.innerHTML = `
                <div class="modal-content">
                  <img class="modal-poster" src="https://image.tmdb.org/t/p/w500/${backdrop_path}" alt="Movie Poster">
                  <h2 class="modal-title">${title}</h2>
                  <p class="modal-overview">${overview}</p>
                  <p id="genres"> ${genres} </p>
                  <span class="close" id="closer">&times;</span>
                  </div>
              </div> `
  
    const closeModalButton = document.querySelector('#closer')
    closeModalButton.addEventListener('click', () => {
      card_modal.remove()
    }
    )
  }