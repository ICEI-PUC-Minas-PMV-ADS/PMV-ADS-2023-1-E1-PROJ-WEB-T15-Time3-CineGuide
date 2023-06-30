let queryName = document.querySelector('#search-input')
let main2 = document.querySelector('main')
let buttonSearch = document.querySelector('#search-icon')


buttonSearch.addEventListener('click', searchFilmByName)




const API_CONFIG2 = {
  method: "get",
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDJlNGEwY2I0ZmQ0ZDkzYWNmYjJmNmQ0MDRlZDVmOCIsInN1YiI6IjY0MDBiZjIzYzcxNzZkMDBkYjU5ZTZiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WmjBboz8g7fdLbqCSLCwYn2tZkakAQrrbsTn0N1udD0',
    'Content-Type': 'application/json; charset=utf-8'
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchFilmByName();
  }
})

function dateConvert(date) {
  const partesData = date.split('-');
  const ano = partesData[0];
  const mes = partesData[1];
  const dia = partesData[2];
  return `${dia}/${mes}/${ano}`;
}
function handleLike(event) {
  if (event.target.src.includes('img/heart.svg')) {
    event.target.src = 'img/red-heart.svg'
  }
  else {
    event.target.src = 'img/heart.svg'
  }
}


async function searchFilmByName() {

  main2.innerHTML = '';
  const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${queryName.value}&language=pt-BR&region=BR&page=1`, API_CONFIG2);
  const data = await response.json();
  console.log(data)
  const cards_container = document.createElement('div')
  cards_container.classList.add('films-cards-container')
  const films_actor_container = document.createElement('div')
  films_actor_container.classList.add('films-cards-container')
  const actor_container = document.createElement('div')
  actor_container.classList.add ('actor-container')
  main2.appendChild(actor_container)
  main2.appendChild(films_actor_container)
  main2.appendChild(cards_container)

  data.results.forEach(result => {
    if(result.media_type === 'tv' && result.vote_average >= 3 && result.backdrop_path !== null ){
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
        type: 'Série'
      }
      renderFilmCards(cardData, cards_container)
      
    }
      if (result.media_type === 'person' && result.popularity > 1) {
      const titlePerson = document.createElement('h3')
      titlePerson.textContent = "Ator:"
      actor_container.appendChild(titlePerson)
      const filmCard = document.createElement('div')
      filmCard.classList.add('movie-card')
      const image = document.createElement('img')
      image.src = `https://image.tmdb.org/t/p/w342/${result.profile_path}`
      const personName = document.createElement('h3')
      personName.textContent = result.name
      const popularity = document.createElement('h6')
      popularity.textContent = `Popularidade: ${parseFloat(result.popularity.toFixed(2))}`
      filmCard.append(image, personName, popularity)
      actor_container.appendChild(filmCard)
      result.known_for.forEach(movies => {
        if (movies.backdrop_path === null || movies.backdrop_path === undefined || movies.title === undefined || movies.vote_average < 2 || movies.poster_path === undefined) {
          return;
        }
        else {
          const genres = movies.genre_ids.map(genreId => {
            const genre = genreList.find(item => item.id === genreId);
            return genre ? genre.name : "";
          }).join(", ");
    
          const cardData = {
            id: movies.id,
            title: movies.title,
            originalTitle: movies.original_title,
            releaseDate: movies.release_date,
            overview: movies.overview,
            posterPath: movies.poster_path,
            backdropPath: movies.backdrop_path,
            voteAverage: movies.vote_average,
            genre: genres,
            overview: movies.overview,
            type: 'Filme'
          }
          renderFilmCards(cardData, films_actor_container)
        }
      })

    }

    if (result.backdrop_path === null || result.backdrop_path === undefined || result.title === undefined || result.vote_average < 2 || result.poster_path === undefined) {
      return;
    }
    else {
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
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
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
  return favoritos
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

  const genreList = [
    {
      id: 28,
      name: "Ação"
    },
    {
      id: 12,
      name: "Aventura"
    },
    {
      id: 16,
      name: "Animação"
    },
    {
      id: 35,
      name: "Comédia"
    },
    {
      id: 80,
      name: "Crime"
    },
    {
      id: 99,
      name: "Documentário"
    },
    {
      id: 18,
      name: "Drama"
    },
    {
      id: 10751,
      name: "Família"
    },
    {
      id: 14,
      name: "Fantasia"
    },
    {
      id: 36,
      name: "História"
    },
    {
      id: 27,
      name: "Terror"
    },
    {
      id: 10402,
      name: "Música"
    },
    {
      id: 9648,
      name: "Mistério"
    },
    {
      id: 10749,
      name: "Romance"
    },
    {
      id: 878,
      name: "Ficção científica"
    },
    {
      id: 10770,
      name: "Cinema TV"
    },
    {
      id: 53,
      name: "Thriller"
    },
    {
      id: 10752,
      name: "Guerra"
    },
    {
      id: 37,
      name: "Faroeste"
    },
    {
      id: 10759,
      name: "Action & Adventure"
    },
    {
      id: 16,
      name: "Animação"
    },
    {
      id: 35,
      name: "Comédia"
    },
    {
      id: 80,
      name: "Crime"
    },
    {
      id: 99,
      name: "Documentário"
    },
    {
      id: 18,
      name: "Drama"
    },
    {
      id: 10751,
      name: "Família"
    },
    {
      id: 10762,
      name: "Kids"
    },
    {
      id: 9648,
      name: "Mistério"
    },
    {
      id: 10763,
      name: "News"
    },
    {
      id: 10764,
      name: "Reality"
    },
    {
      id: 10765,
      name: "Sci-Fi & Fantasy"
    },
    {
      id: 10766,
      name: "Soap"
    },
    {
      id: 10767,
      name: "Talk"
    },
    {
      id: 10768,
      name: "War & Politics"
    },
    {
      id: 37,
      name: "Faroeste"
    }
  ]
