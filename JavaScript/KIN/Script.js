let movies = document.getElementById("movies");
let new_movie =[]
async function getMovies() {
   let response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films?type=TV_SERIES', {
       headers: {
           'X-API-KEY': 'f85183cb-777b-4fe8-a1c7-e368548fac6f',
       }
   })
    new_movie = response.data.items
    console.log(new_movie)
    showMovie()
}
getMovies()

function showMovie() {
    for (let movie of new_movie) {
        let mobie = document.createElement("div")
        let movie__cover_inner = document.createElement("div")
        let movie__cover = document.createElement("img")
        let movie__title = document.createElement("p")
        let movie__average = document.createElement("p")
        let year = document.createElement("p")

        movie__cover.src = movie.posterUrl
        movie__title.innerHTML = `${movie.nameRu} ${movie.year}`
        movie__average.innerHTML = movie.ratingKinopoisk

        movie__cover_inner.append(movie__cover)

        mobie.append(movie__cover_inner)

        movies.append(mobie)
        mobie.append(movie__title)
        mobie.append(movie__average)
        mobie.append(year)


        movie__cover_inner.classList.add('movies__cover')
        movie__cover.classList.add('movie__cover-inner')
        movie__title.classList.add('movie__title')
        movie__average.classList.add('movie__average')
        mobie.classList.add('movie')

    }

}

