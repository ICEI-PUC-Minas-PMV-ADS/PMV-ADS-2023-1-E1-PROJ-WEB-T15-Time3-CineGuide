
const streamingsOptions = document.getElementById('streaming')
const genresOptions = document.getElementById('genres')
const searchButton = document.getElementById('search-button')
const type = document.getElementById ('type')
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

type.addEventListener('change', releaseSelectGenres)

function releaseSelectGenres (){
  const selectType = document.querySelector ('#type')
  const selectGenres = document.querySelector ('#genres')
  const selectedOption = selectType.value 
  selectGenres.innerHTML = ''
  let options 
  if(selectedOption === 'film' ) {
    options = `
    <option value="28">Ação</option>
    <option value="12">Aventura</option>
    <option value="16">Animação</option>
    <option value="80">Crime</option>
    <option value="99">Documentário</option>
    <option value="18">Família</option>
    <option value="14">Fantasia</option>
    <option value="878">Ficção Científica</option>
    <option value="10752">Guerra</option>
    <option value="36">História</option>
    <option value="9648">Mistério</option>
    <option value="10749">Romance </option>
    <option value="27">Terror</option>
    `
  } else if (selectedOption === 'serie') {
    options = `
    <option value="10759">Ação e Aventura</option>
    <option value="16">Animação</option>
    <option value="35">Comédia</option>
    <option value="80">Crime</option>
    <option value="99">Documentário</option>
    <option value="18">Drama</option>
    <option value="10751">Família</option>
    <option value="10762">Kids</option>
    <option value="9648">Mistério</option>
    <option value="10764">Reality</option>
    <option value="10765">Ficção Científica</option>
    <option value="37">Faroeste</option>
    <option value="10768">Guerra</option>
    <option value="10767">Talk</option>
    <option value="10766">Romance</option> `
  }
  selectGenres.innerHTML = options
}

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
    cards_container.innerHTML = ''
    if (type.value === 'serie'){
      const response = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=pt-BR&page=1&sort_by=popularity.desc&watch_region=BR&with_genres=${genresOptions.value}&with_watch_providers=${streamingsOptions.value}`, API_CONFIG)
      const data = await response.json();
      console.log(data)
      data.results.forEach(result => {
        const genres = result.genre_ids.map(genreId => {
          const genre = genreList.find(item => item.id === genreId);
          return genre ? genre.name : "";
        }).join(", ");
        const cardData = {
          id: result.id,
          title: result.name,
          originalTitle: result.original_name,
          releaseDate: result.first_air_date,
          overview: result.overview,
          posterPath: result.poster_path,
          backdropPath: result.backdrop_path,
          voteAverage: result.vote_average,
          genre: genres,
          overview: result.overview,
          type: 'Serie'
        }
        renderFilmCards(cardData, cards_container)
      })

    }else{
      const response = await fetch (`https://api.themoviedb.org/3/discover/movie?include_adult=true&with_genres=${genresOptions.value}&include_video=false&language=pt-BR&page=1&region=BR&sort_by=popularity.desc&watch_region=BR&with_watch_providers=${streamingsOptions.value}`, API_CONFIG);
    const data = await response.json();
    console.log(data)
    data.results.forEach(result => {

      if (result.backdrop_path === null || result.backdrop_path === undefined || result.title === undefined || result.vote_average < 2 || result.poster_path === undefined) {
        return;
      }
      else  {
        const genres = result.genre_ids.map(genreId => {
          const genre = genreList.find(item => item.id === genreId);
          return genre ? genre.name : "";
        }).join(", ");
        const cardData = {
          id: result.id,
          title: result.title,
          originalTitle: result.original_title,
          releaseDate: result.release_date,
          overview: result.overview,
          posterPath: result.poster_path,
          backdropPath: result.backdrop_path,
          voteAverage: result.vote_average,
          genre: genres,
          overview: result.overview,
          type: 'Filme'
        }

        renderFilmCards(cardData, cards_container)

      }
    })
  }
    }

    


  function renderFilmCards(dataCard, container) {
    const filmCard = document.createElement('div')
    filmCard.classList.add('movie-card')
  
    const image = document.createElement('img')
    image.src = `https://image.tmdb.org/t/p/w342/${dataCard.posterPath}`
    const title = document.createElement('h3')
    title.textContent = dataCard.title
    const originalTitle = document.createElement('h5')
    originalTitle.textContent = dataCard.originalTitle
    const midiaType = document.createElement('h6')
    midiaType.textContent = dataCard.type
    const releaseDate = document.createElement('h6')
    releaseDate.textContent = `Lançamento: ${dateConvert(dataCard.releaseDate)}`
  
    const filmNote = document.createElement('h6')
    filmNote.textContent = `Nota: ${parseFloat(dataCard.voteAverage.toFixed(2))}/10`
    const buttonsWrapper = document.createElement('div')
    buttonsWrapper.classList.add('note-favorite')
    const heartIcon = document.createElement('img')
    heartIcon.setAttribute('src', 'img/heart.svg')
    heartIcon.addEventListener('click', handleLike)
    const sinopseButton = document.createElement('button')
    sinopseButton.textContent = 'Ver mais'
    buttonsWrapper.append(heartIcon, sinopseButton)
    filmCard.append(image, title, originalTitle, midiaType, releaseDate, filmNote, buttonsWrapper)
    heartIcon.addEventListener('click', () =>{ addOrRemoveFavorite (dataCard) } )
    
    sinopseButton.addEventListener('click', () => { renderOverview(dataCard.backdropPath, dataCard.title, dataCard.overview, dataCard.genre) })
    container.appendChild(filmCard)
    const favoritos = getFavoriteList()
    const index = favoritos.findIndex(card => card.id === dataCard.id);
    if (index !== -1) {
      heartIcon.src = 'img/red-heart.svg'
    }
    // Função para Adicionar o excluir dos favoritos.
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
    document.addEventListener ('keydown', function(event){
      if (event.key ==='Escape'){
        card_modal.remove()
      }
    })
    
  }

  function getFavoriteList() {
    const favoritosJSON = localStorage.getItem('favoritos');
    let favoritos = [];
    if (favoritosJSON) {
      favoritos = JSON.parse(favoritosJSON);
    }
    return favoritos;
  }

  function addOrRemoveFavorite (dataCard) 
  {    
    const favoritos = getFavoriteList()
    // Encontrar o índice do card a ser excluído na lista de favoritos
    const index = favoritos.findIndex(card => card.id === dataCard.id);
    if (index !== -1) {
      favoritos.splice(index, 1)
      localStorage.setItem('favoritos', JSON.stringify(favoritos))
    } else {
      favoritos.push(dataCard)
      // Converter a lista de favoritos em uma string JSON
      const favoritosJSONAtualizado = JSON.stringify(favoritos);

      // Salvar a lista de favoritos no localStorage
      localStorage.setItem('favoritos', favoritosJSONAtualizado);
    }
  }
  



