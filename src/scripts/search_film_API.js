let queryName = document.querySelector('#search-input')
let main = document.querySelector('main')
let buttonSearch = document.querySelector('#search-icon')

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


async function searchFilmByName() 
{
  main.innerHTML = '';
  const response = await fetch(`${FILMS_API_BASE_URL}/3/search/multi?query=${queryName.value}&include_adult=true&language=pt-BR&page=1`, API_CONFIG);
  const data = await response.json();
  console.log(data)
  const cards_container = document.createElement('div')
  cards_container.classList.add('films-cards-container')
  main.appendChild(cards_container)

  data.results.forEach(result => 
  {
    if (result.backdrop_path === undefined || result.title === undefined) 
    {
      return;
    }
    else 
    {
      const film_card = document.createElement('div')
      film_card.classList.add('movie-card')

      const image = document.createElement('img')
      image.src = `https://image.tmdb.org/t/p/w500/${result.backdrop_path}`
      film_card.appendChild(image)

      const title = document.createElement('h3')
      title.textContent = result.title
      film_card.appendChild(title)

      


      cards_container.insertAdjacentHTML('beforeend', film_card)
    }
  }
  )
}
      