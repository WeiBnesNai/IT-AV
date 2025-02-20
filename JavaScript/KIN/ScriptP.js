let movie__title = document.getElementsByClassName('movie__title')
let movie__cover = document.getElementsByClassName('movie__cover')
let movieEe = []
let countriessGen = []
let genres = []

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
    let pButton = document.getElementById('pButton')
    let buttton = document.getElementById('sub')
    for (let co of mobie.countries) {
        country.innerHTML += co.country + ', '
    }

    for (let gen of mobie.genres) {
        g.innerHTML += gen.genre + ', '
    }


    // countriessGen.push({
    //     country: mobie.countries,
    //     genre: mobie.genres
    // })
    //
    // for (let co of countriessGen) {
    //     country.innerHTML = co.country.country
    //     g.innerHTML = co.genre.genre
    // }
        cover.src = mobie.posterUrl
        title.innerHTML = mobie.nameRu
        content.innerHTML = mobie.description
    year.innerHTML = mobie.year


    mins.innerHTML = mobie.filmLength || '-'
    rate_Imdb.innerHTML = mobie.ratingImdb || '-'
    rate_Kin.innerHTML = mobie.ratingKinopoisk
    pButton.href = mobie.webUrl


    // if (mobie.ratingImdb == null){
    //     rate_Imdb.innerHTML = '-'}

    buttton.addEventListener('click', sendComment)
    function sendComment() {
        let author = document.getElementById('author')
        let comment = document.getElementById('text')
        let comlist = document.getElementById('comlist')


        let CommentCard = document.createElement('div')
        let CommentTitle = document.createElement('h3')
        let CommentAuthor = document.createElement('h2')

        CommentTitle.classList.add('comment-form__text')
        CommentAuthor.classList.add('comment-form__author')
        CommentCard.classList.add('comments-list__item')

        CommentTitle.innerHTML = comment.value
        CommentAuthor.innerHTML = author.value

        CommentTitle.append(CommentCard)
        CommentAuthor.append(CommentCard)
        CommentCard.append(comlist)
    }
}
