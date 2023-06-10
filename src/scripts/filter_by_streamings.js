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

  
function dateConvert(data) {
    const partesData = data.split('-');
    const ano = partesData[0];
    const mes = partesData[1];
    const dia = partesData[2];
    return `${dia}/${mes}/${ano}`;
  }
  

  
  async function getByStreaming() {
    const response = await fetch (`https://api.themoviedb.org/3/discover/movie?include_adult=true&with_genres=${genres.value}&include_video=false&language=pt-BR&page=1&region=BR&sort_by=popularity.desc&watch_region=BR&with_watch_providers=${streaming.value}`, API_CONFIG);
    const data = await response.json();
    console.log(data)
    const cards_container = document.createElement('div')
    cards_container.classList.add('films-cards-container')
    const main = document.querySelector('main')
    main.appendChild(cards_container)
    cards_container.innerHTML = ''
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
        
        const note_favorite = document.createElement('div')
        const film_note = document.createElement('h6')
        note_favorite.classList.add('note-favorite')
        const heartIcon = `<span class="material-symbols-outlined"> favorite </span>`
        film_note.textContent = `Nota: ${parseFloat(result.vote_average.toFixed(2))}/10`
        note_favorite.innerHTML = heartIcon
        note_favorite.appendChild(film_note)
        const sinopseButton = document.createElement('button')
        sinopseButton.textContent = 'Ver mais'
       
        film_card.append(image,title,original_title,release_date,note_favorite,sinopseButton)
  
        sinopseButton.addEventListener('click', () => {
          const card_modal = document.createElement('div')
          card_modal.classList.add('modal-movie-card')
          const body = document.querySelector('body')
          body.appendChild(card_modal)
  
          fetch(`https://api.themoviedb.org/3/movie/${result.id}?language=pt-BR&api_key=FILMS_API_KEY`, API_CONFIG)
            .then(response => response.json())
            .then(data => {
              const film = data;
              console.log(film)
              const genres = film.genres.map(genero => genero.name).join(', ')
  
              card_modal.innerHTML = `
                <div class="modal-content">
                  <img class="modal-poster" src="https://image.tmdb.org/t/p/w500/${result.backdrop_path}" alt="Movie Poster">
                  <h2 class="modal-title">${result.title}</h2>
                  <p class="modal-overview">${result.overview}</p>
                  <p id="genres"> ${genres} </p>
                  <span class="close">&times;</span>
                  </div>
              </div> `
  
              const closeModalButton = document.querySelector('#close')
              closeModalButton.addEventListener('click', () => {
                card_modal.remove()
            })
            })
        })
        cards_container.appendChild(film_card)  
      }  
    })
  }



  



