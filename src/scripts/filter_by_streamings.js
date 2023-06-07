const type = document.getElementById('type')
const streaming = document.getElementById('streaming')
const genres = document.getElementById('genres')

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
  
  
  async function getByStreaming() {
    const response = await fetch (`https://api.themoviedb.org/3/discover/movie?include_adult=true&with_genres=${genres.value}&include_video=false&language=pt-BR&page=1&region=BR&sort_by=popularity.desc&watch_region=BR&with_watch_providers=${streaming.value}`, API_CONFIG);
    const data = await response.json();
    console.log(data)
    const cards_container = document.createElement('div')
    cards_container.classList.add('films-cards-container')
    main.appendChild(cards_container)
    
}