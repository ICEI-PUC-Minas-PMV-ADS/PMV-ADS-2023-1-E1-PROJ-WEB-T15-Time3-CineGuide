let queryName = document.querySelector('#search-input')
let main = document.querySelector('main')
let buttonSearch = document.querySelector('#search-icon')
let favoriteList = []

buttonSearch.addEventListener('click', searchFilmByName)

const FILMS_API_BASE_URL = 'https://api.themoviedb.org'

const FILMS_API_KEY = '8d2e4a0cb4fd4d93acfb2f6d404ed5f8'

const API_CONFIG = {
  method: "get",
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDJlNGEwY2I0ZmQ0ZDkzYWNmYjJmNmQ0MDRlZDVmOCIsInN1YiI6IjY0MDBiZjIzYzcxNzZkMDBkYjU5ZTZiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WmjBboz8g7fdLbqCSLCwYn2tZkakAQrrbsTn0N1udD0',
    'Content-Type': 'application/json; charset=utf-8'
  }
}

function dateConvert(data) {
  const partesData = data.split('-');
  const ano = partesData[0];
  const mes = partesData[1];
  const dia = partesData[2];
  return `${dia}/${mes}/${ano}`;
}
function handleLike (event) {
  if (event.target.src.includes('img/heart.svg')){
    event.target.src = 'img/red-heart.svg'
  }
  else {
    event.target.src = 'img/heart.svg'
  }
} 


async function searchFilmByName() {
  main.innerHTML = '';
  const response = await fetch(`${FILMS_API_BASE_URL}/3/search/multi?query=${queryName.value}&language=pt-BR&region=BR&page=1`, API_CONFIG);
  const data = await response.json();
  console.log(data)
  const cards_container = document.createElement('div')
  cards_container.classList.add('films-cards-container')
  main.appendChild(cards_container)

  data.results.forEach(result => {

    if (result.backdrop_path === null || result.backdrop_path === undefined || result.title === undefined || result.vote_average < 2 || result.poster_path === undefined) {
      return;
    }
    else {
      const film_card = document.createElement('div')
      film_card.classList.add('movie-card')

      const image = document.createElement('img')
      image.src = `https://image.tmdb.org/t/p/w342/${result.poster_path}`
      const title = document.createElement('h3')
      title.textContent = result.title
      const original_title = document.createElement('h5')
      original_title.textContent = result.original_title
      const release_date = document.createElement('h6')
      release_date.textContent = `Lançamento: ${dateConvert(result.release_date)}`

      const film_note = document.createElement('h6')
      film_note.textContent = `Nota: ${parseFloat(result.vote_average.toFixed(2))}/10`
      const buttons_wrapper = document.createElement('div')
      buttons_wrapper.classList.add('note-favorite')
      const heartIcon = document.createElement ('img')
      heartIcon.setAttribute('src', 'img/heart.svg')
      const sinopseButton = document.createElement('button')
      sinopseButton.textContent = 'Ver mais'
      buttons_wrapper.append(heartIcon, sinopseButton)
      
      const buttonFavorite = document.createElement('button')

      film_card.append(image, title, original_title, release_date, film_note, buttons_wrapper, buttonFavorite)


      heartIcon.addEventListener('click', handleLike)


      fetch(`https://api.themoviedb.org/3/movie/${result.id}?language=pt-BR&api_key=FILMS_API_KEY`, API_CONFIG)
        .then(response => response.json())
        .then(data => {
          const film = data;
          const genres = film.genres.map(genero => genero.name).join(', ')
          const cardData = {
            id: result.id,
            title: result.title,
            originalTitle: result.originalTitle,
            releaseDate: result.releaseDate,
            overview: result.overview,
            posterPath: result.poster_path,
            backdropPath: result.backdrop_path,
            voteAverage: result.vote_average,
            genre: genres
          }

          heartIcon.addEventListener('click', () => {
            const favoritosJSON = localStorage.getItem('favoritos');
            let favoritos = [];
            if (favoritosJSON) {
              favoritos = JSON.parse(favoritosJSON);
            }
            // Encontrar o índice do card a ser excluído na lista de favoritos
            const index = favoritos.findIndex(card => card.id === result.id);
            if (index !== -1) {
              favoritos.splice(index, 1)
              localStorage.setItem('favoritos', JSON.stringify(favoritos))
            } else {
              favoritos.push(cardData)
              // Converter a lista de favoritos em uma string JSON
              const favoritosJSONAtualizado = JSON.stringify(favoritos);

              // Salvar a lista de favoritos no localStorage
              localStorage.setItem('favoritos', favoritosJSONAtualizado);
            }
          })


          sinopseButton.addEventListener('click', () => { renderOverview(result.backdrop_path, result.title, result.overview, genres) })
        })

      cards_container.appendChild(film_card)
    }
  }

  )
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


