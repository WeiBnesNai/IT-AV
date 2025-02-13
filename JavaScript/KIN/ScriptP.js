let movie__title = document.getElementsByClassName('movie_title')
let movie__cover = document.getElementsByClassName('movie__cover')
let movieEe = []

const api_key = 'f85183cb-777b-4fe8-a1c7-e368548fac6f'
let movie = null

async function getMobie() {
    const params = new URLSearchParams(window.location.search);
    const FilmId = params.get('id')

    if (FilmId === null) {
    alert('Фильм не найден')
    }
    else {
        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${ FilmId }`, {
            headers: {
                "Content-Type": 'application/json',
                    'X-API-KEY': 'f85183cb-777b-4fe8-a1c7-e368548fac6f',
            }
        })
        movie = response.data
    }
}
getMobie()

function showFilm() {
    for (let movieE of movieEe) {
        movie__cover.src = movieE.posterUrl

        movie__title.innerHTML = `${movie.nameRu} ${movie.year}`
    }
}
showFilm()