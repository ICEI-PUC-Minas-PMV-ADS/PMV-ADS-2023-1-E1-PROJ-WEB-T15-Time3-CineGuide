const type = document.getElementById('type')
const streaming = document.getElementById('streaming')
const genres = document.getElementById('genres')
const searchButton = document.getElementById('search-button')
console.log("Script Streamings vinculado.")

const FILMS_API_BASE_URL = 'https://api.themoviedb.org'

const FILMS_API_KEY = '8d2e4a0cb4fd4d93acfb2f6d404ed5f8'


const API_CONFIG = {
    method: "get",
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDJlNGEwY2I0ZmQ0ZDkzYWNmYjJmNmQ0MDRlZDVmOCIsInN1YiI6IjY0MDBiZjIzYzcxNzZkMDBkYjU5ZTZiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WmjBboz8g7fdLbqCSLCwYn2tZkakAQrrbsTn0N1udD0',
      'Content-Type': 'application/json; charset=utf-8'
    }
  }

searchButton.addEventListener('click', getByStreaming)

function handleLike (event) {
  if (event.target.src.includes('img/heart.svg')){
    event.target.src = 'img/red-heart.svg'
  }
  else {
    event.target.src = 'img/heart.svg'
  }
} 

function dateConvert(data) {
    const partesData = data.split('-');
    const ano = partesData[0];
    const mes = partesData[1];
    const dia = partesData[2];
    return `${dia}/${mes}/${ano}`;
  }
  
  const cards_container = document.createElement('div')
  cards_container.classList.add('films-cards-container')
  const main = document.querySelector('main')
  main.appendChild(cards_container)

  
  async function getByStreaming() {
    const response = await fetch (`https://api.themoviedb.org/3/discover/movie?include_adult=true&with_genres=${genres.value}&include_video=false&language=pt-BR&page=1&region=BR&sort_by=popularity.desc&watch_region=BR&with_watch_providers=${streaming.value}`, API_CONFIG);
    const data = await response.json();
    console.log(data)
    cards_container.innerHTML = ''
    data.results.forEach(result => {

      if (result.backdrop_path === null || result.backdrop_path === undefined || result.title === undefined || result.vote_average < 2 || result.poster_path === undefined) {
        return;
      }
      else  {
        const filmCard = document.createElement('div')
        filmCard.classList.add('movie-card')
  
        const image = document.createElement('img')
        image.src = `https://image.tmdb.org/t/p/w342/${result.poster_path}`
        const title = document.createElement('h3')
        title.textContent = result.title
        const originalTitle = document.createElement('h5')
        originalTitle.textContent = result.original_title
        const releaseDate = document.createElement('h6')
        releaseDate.textContent = `Lançamento: ${dateConvert(result.release_date)}`
  
        const filmNote = document.createElement('h6')
        filmNote.textContent = `Nota: ${parseFloat(result.vote_average.toFixed(2))}/10`
        const buttonsWrapper = document.createElement('div')
        buttonsWrapper.classList.add('note-favorite')
        const heartIcon = document.createElement ('img')
        heartIcon.setAttribute('src', 'img/heart.svg')
        const sinopseButton = document.createElement('button')
        sinopseButton.textContent = 'Ver mais'
        buttonsWrapper.append(heartIcon, sinopseButton)
        
        filmCard.append(image, title, originalTitle, releaseDate, filmNote, buttonsWrapper)
  
  
        heartIcon.addEventListener('click', handleLike)
  
  
        fetch(`https://api.themoviedb.org/3/movie/${result.id}?language=pt-BR&api_key=FILMS_API_KEY`, API_CONFIG)
          .then(response => response.json())
          .then(data => {
            const film = data;
            const genres = film.genres.map(genero => genero.name).join(', ')
            
            const cardData = {
              id: result.id,
              title: result.title,
              originalTitle: result.original_title,
              releaseDate: result.release_date,
              overview: result.overview,
              posterPath: result.poster_path,
              backdropPath: result.backdrop_path,
              voteAverage: result.vote_average,
              genre: genres
            }
            // Função para Adicionar o excluir dos favoritos.
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
  
        cards_container.appendChild(filmCard)
      }
    })
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



  



