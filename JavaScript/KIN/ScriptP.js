let movie__title = document.getElementsByClassName('movie__title')
let movie__cover = document.getElementsByClassName('movie__cover')
let movieEe = []

const api_key = 'f85183cb-777b-4fe8-a1c7-e368548fac6f'
let mobie = null

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
                    'X-API-KEY': api_key,
            }
        })
        mobie = response.data;
        console.log(mobie)
        showFilm()
    }
}
getMobie()

function showFilm() {
    let title = document.getElementById('title')
    let cover = document.getElementById('cover')
    let year = document.getElementById('year')
    let country = document.getElementById('country')
    let g = document.getElementById('g')
    let mins = document.getElementById('mins')
    let rate_Imdb = document.getElementById('rate_Imdb')
    let rate_Kin = document.getElementById('rate_Kin')

        cover.src = mobie.posterUrl
        title.innerHTML = mobie.nameRu
        content.innerHTML = mobie.description
    year.innerHTML = mobie.year
    country.innerHTML = mobie.countries
    g.innerHTML = mobie.genres
    mins.innerHTML = mobie.filmLength
    rate_Imdb.innerHTML = mobie.ratingImdb
    rate_Kin.innerHTML = mobie.ratingKinopoisk
}