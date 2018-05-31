$(document).ready(function () {
    // API KEY
    let apiKey = 'be274637c84b2bf658d5cf6a78fb8d74';

    // Owl Carousel and Random Photo
    let getRandomPoster = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey + '&language=en_EN&page=1';
    $.getJSON(getRandomPoster, function (array) {
        let result = array.results,
            blockSlide = $('.section-slide');
        for (let i = 0; i < result.length; i++){
            blockSlide.append('<div class="movie-data"><img src="https://image.tmdb.org/t/p/w1400_and_h450_face' + result[i].backdrop_path + '" alt="" class="movie-bg"><div class="movie-data-info"><img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2' + result[i].poster_path + '" alt="" class="movie-poster"><button class="movie-card movie-name" value="' + result[i].id + '">' + result[i].title + '</button><span class="movie-vope">' + result[i].vote_average + '</span></div></div>');
        }

        let carosel = $('.owl-carousel');
        carosel.owlCarousel({
            items: 1,
            loop:true,
            margin: 0,
            center: true,
            smartSpeed: 1400,
            autoplay:true,
            autoplayTimeout: 7000,
            autoplayHoverPause:true
        });
    });

    // Top Rated
    $.getJSON('https://api.themoviedb.org/3/movie/top_rated?api_key=' + apiKey + '&language=en-US&page=1', function (result) {
        let out = $('.top-rated');
        for (let i = 0; i < 12; i++){
            out.append('<button class="movie-card movie-list" value="' + result.results[i].id + '"><img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2' + result.results[i].poster_path + '" class="img-movie-list"><div class="blur-movie-list"><p class="name-movie-list">' + result.results[i].title + '</p></div></button>')
        }
    });

    // Popular
    $.getJSON('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US&page=1', function (result) {
        let out = $('.popular');
        for (let i = 0; i < 12; i++){
            out.append('<button class="movie-card movie-list" value="' + result.results[i].id + '"><img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2' + result.results[i].poster_path + '" class="img-movie-list"><div class="blur-movie-list"><p class="name-movie-list">' + result.results[i].title + '</p></div></button>')
        }
    });

    // Upcoming
    $.getJSON('https://api.themoviedb.org/3/movie/upcoming?api_key=' + apiKey + '&language=en-US&page=1', function (result) {
        let out = $('.upcoming');
        for (let i = 0; i < 12; i++){
            out.append('<button class="movie-card movie-list" value="' + result.results[i].id + '"><img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2' + result.results[i].poster_path + '" class="img-movie-list"><div class="blur-movie-list"><p class="name-movie-list">' + result.results[i].title + '</p></div></button>')
        }
    });

    // Top people
    $.getJSON('https://api.themoviedb.org/3/person/popular?api_key=' + apiKey + '&language=en-US&page=1', function (result) {
        let out = $('.top-people');
        for (let i = 0; i < 10; i++){
            out.append('<button class="movie-card movie-list" value="' + result.results[i].id + '"><img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2' + result.results[i].profile_path + '" class="img-movie-list"><div class="blur-actor-list"><p class="name-movie-list">' + result.results[i].name + '</p></div></button>')
        }
    });



//    =======================================
    let card = $('.section-info'),
        cardInfo = $('.block-movie-info');

 $('.standart').on('click', '.movie-card', function () {
     card.addClass('-active');
     let getID = this.value;
     // header
     $.getJSON('https://api.themoviedb.org/3/movie/' + getID + '?api_key=' + apiKey + '&language=en-US', function (result) {
         console.log(result);
         cardInfo.append('<div class="header-info"><img class="movie-info-poster" src="https://image.tmdb.org/t/p/w300_and_h450_bestv2' + result.poster_path + '">\n' +
             '            <div class="movie-min-info flex column">\n' +
             '                <div class="flex start">\n' +
             '                    <h2 class="name-movie">' + result.title + '</h2>\n' +
             '                    <span class="vope-movie">' + result.vote_average + '</span>\n' +
             '                </div>\n' +
             '                <span class="genres">Genres: <span class="red-genres">Action</span> <span class="red-genres">Comedy</span> <span class="red-genres">Science Fiction</span></span>\n' +
             '                <span class="movie-author"></span>\n' +
             '            </div>\n' +
             '        </div>\n' +
             '<div class="section-movie-info">\n' +
         '            <h2 class="headline-info">Overview</h2>\n' +
         '            <p class="movie-title-info">' + result.overview + '</p>\n' +
         '            <h2 class="headline-info">Top Billed Cast</h2>\n' +
         '            <div class="cast-people flex row">\n' +
         '            </div>\n' +
         '            <h2 class="headline-info">Media</h2>\n' +
         '        </div>');

     });

     // section
     $.getJSON('https://api.themoviedb.org/3/movie/' + getID + '/credits?api_key=' + apiKey, function (result) {
         console.log(result);
         for (let i = 0; i < result.cast.length; i++){
             $('.cast-people').append('    <div class="block-people flex standart column">\n' +
                 '                    <img class="actors-photo" src="https://image.tmdb.org/t/p/w300_and_h450_bestv2'+ result.cast[i].profile_path +'" alt="">\n' +
                 '                    <h3 class="actors-name">' + result.cast[i].name + '</h3>\n' +
                 '                </div>\n');
         }

         console.log(result.cast.name);
     });

     // media
     $.getJSON('https://api.themoviedb.org/3/movie/' + getID + '/videos?api_key=' + apiKey + '&language=en-US',function (result) {
         console.log(result);
         for (let i = 0; i < 1; i++){
             cardInfo.append('<iframe class="video-t" width="100%" src="https://www.youtube.com/watch?v=' + result.results[i] + '" frameborder="0" allow="autoplay encrypted-media" allowfullscreen></iframe>');
         }
     });
 });
    $('.js-close-card').click(function () {
        card.removeClass('-active');
    })
});