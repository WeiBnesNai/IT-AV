let movies = document.getElementById("movies");
let new_movie = []
let page1b = document.getElementById("page1");
let page2b = document.getElementById("page2");
let page3b = document.getElementById("page3");
let page4b = document.getElementById("page4");
let page5b = document.getElementById("page5");
let Naiti = document.getElementById('inputNai')
let SearchButton = document.getElementById('SearchButton')
let clearSeach = document.getElementById("clearSearch");

let page = 1

async function getMovies() {
    let response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films?type=TV_SERIES', {
        params: {
            keyword: Naiti.value,
            page: page,
        },
        headers: {
            'X-API-KEY': 'f85183cb-777b-4fe8-a1c7-e368548fac6f',
        }
    })
    new_movie = response.data.items
    console.log(new_movie)
    showMovie()
}

getMovies()
page1b.classList.add("pageButton_active")

function showMovie() {
    movies.innerHTML = ''
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
        // mobie.addEventListener('click', per)

        function per() {
            let url = `str.html?id=${movie.kinopoiskId}`;
            window.open(url, '_self');

            // window.open('str.html?id='+5260016, '_blank')

        }
        mobie.addEventListener('click', per)
    }
}

function page1() {
    page1b.classList.add('pageButton_active')
    page2b.classList.remove('pageButton_active')
    page3b.classList.remove('pageButton_active')
    page4b.classList.remove('pageButton_active')
    page5b.classList.remove('pageButton_active')
    movies.innerHTML = ''
    page = 1
    getMovies()
}

page1b.addEventListener('click', page1)

function page2() {
    page1b.classList.remove('pageButton_active')
    page2b.classList.add('pageButton_active')
    page3b.classList.remove('pageButton_active')
    page4b.classList.remove('pageButton_active')
    page5b.classList.remove('pageButton_active')
    movies.innerHTML = ''
    page = 2
    getMovies()

}

page2b.addEventListener('click', page2)

function page3() {
    page1b.classList.remove('pageButton_active')
    page2b.classList.remove('pageButton_active')
    page3b.classList.add('pageButton_active')
    page4b.classList.remove('pageButton_active')
    page5b.classList.remove('pageButton_active')
    movies.innerHTML = ''
    page = 3
    getMovies()
}

page3b.addEventListener('click', page3)

function page4() {
    page1b.classList.remove('pageButton_active')
    page2b.classList.remove('pageButton_active')
    page3b.classList.remove('pageButton_active')
    page4b.classList.add('pageButton_active')
    page5b.classList.remove('pageButton_active')
    page5b.classList.remove('pageButton_active')
    movies.innerHTML = ''
    page = 4
    getMovies()
}

page4b.addEventListener('click', page4)

function page5() {
    page1b.classList.remove('pageButton_active')
    page2b.classList.remove('pageButton_active')
    page3b.classList.remove('pageButton_active')
    page4b.classList.remove('pageButton_active')
    page5b.classList.add('pageButton_active')
    movies.innerHTML = ''
    page = 5
    getMovies()
}

page5b.addEventListener('click', page5)

function clearSearch() {
    movies.innerHTML = ''
    Naiti.value = ''
    getMovies()
}


SearchButton.addEventListener('click', getMovies)
clearSeach.addEventListener('click', clearSearch)
