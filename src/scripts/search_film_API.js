let queryName = document.querySelector ('#search-input')
let main = document.querySelector ('main')
let buttonSearch = document.querySelector('#search-icon')

buttonSearch.addEventListener('click', searchFilmByName)



const FILMS_API_BASE_URL = 'https://api.themoviedb.org'


const FILMS_API_KEY = '8d2e4a0cb4fd4d93acfb2f6d404ed5f8'

const API_CONFIG = {
    method: "get",
    headers: {
        'Authorization': 'Bearer 8d2e4a0cb4fd4d93acfb2f6d404ed5f8',
        'Content-Type': 'application/json; charset=utf-8'
    }
}



async function searchFilmByName() {
    main.innerHTML = '';
    const response = await fetch(`${FILMS_API_BASE_URL}/3/search/multi?query=${queryName.value}&include_adult=true&language=pt-BR&page=1`, API_CONFIG);
    const data = await response.json();
    console.log(data)
    const films_container = document.createElement('div')
    main.appendChild(films_container)

    data.results.forEach(result => {
        const film_card = `    <div class="card" style="width:30rem;">
        <img src="https://image.tmdb.org/t/p/w500/${result.backdrop_path}" class="card-img-top" alt="${result.title}">
        <div class="card-body">
          <h5 class="card-title">${result.title}</h5>
          <p> ${result.original_title} </p>
          <p class="card-text">Ano de Lançamento: ${result.release_date}</p>
          <p> Genero: </p>
          <p> Classificação do Filme: ${result.vote_average} </p> 
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne">
                  Sinopse
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                <p> ${result.overview} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`


        films_container.insertAdjacentHTML('beforeend', film_card)

    }
    )
}