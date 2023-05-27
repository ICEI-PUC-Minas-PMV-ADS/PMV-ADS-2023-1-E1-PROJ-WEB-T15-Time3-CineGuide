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

function dateConvert (data) {
  const partesData = data.split('-');
  const ano = partesData[0];
  const mes = partesData[1];
  const dia = partesData[2];
  return `${dia}/${mes}/${ano}`;
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
     image.src = `https://image.tmdb.org/t/p/w342/${result.poster_path}`
     film_card.appendChild(image)

     const title = document.createElement('h3')
     title.textContent = result.title
     film_card.appendChild(title)

     const original_title = document.createElement('h5')
     original_title.textContent = result.original_title
     film_card.appendChild(original_title)
     

     const release_date = document.createElement('p') 
     release_date.textContent = `Lançamento: ${dateConvert(result.release_date)}`
     film_card.appendChild(release_date)

     const wrapper_favorite = document.createElement('div')
     const film_note = document.createElement('p')
     const voteFixed = parseFloat(result.vote_average.toFixed(2))
     wrapper_favorite.classList.add('wrapper-favorite')
     const heartIcon = `<span class="material-symbols-outlined"> favorite </span>`
     film_note.textContent = `Nota: ${voteFixed}/10`
     wrapper_favorite.innerHTML = heartIcon
     wrapper_favorite.appendChild(film_note)  



     film_card.appendChild(wrapper_favorite)
     

     
     

     cards_container.appendChild(film_card)
    }
  }
 )
}
      