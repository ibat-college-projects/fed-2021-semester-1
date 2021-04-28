$(function () {
    initButtons();
})

function initButtons() {

    $('#btnLoadMovies').on('click', function () {

        let url = 'https://college-movies.herokuapp.com/';

        $.getJSON(url, function (data) {

            renderMovieData(data);

        })
        console.log('stuff');
    })



}

function renderMovieData(content) {

    console.log(content);

    htmlString = [];
    htmlString.push("<ol>");
    for (const movie of content) {


        /*
        let title = movie.title;
        let year = movie.year;
        let director = movie.director;
        let id = movie.id
        let cast = movie.cast
        */

        // object destructuring 

        const { title, year, director, id, cast, ...rest } = movie;

        console.log(rest);


        // console.log(`${id} : ${title}: ${year} : ${director}`)
        htmlString.push(`<li>${title}`);

        htmlString.push(`<ul>`);

        let castMembers = cast.split(',');

        for (const castMember of castMembers) {
            htmlString.push(`<li>${castMember}</li>`);
        }

        htmlString.push(`</ul></li>`);

    }

    htmlString.push(`</ol>`);

    populateMovies(htmlString.join(''));

}


function populateMovies(content) {

    $('#messagePanel').html(content);

}
