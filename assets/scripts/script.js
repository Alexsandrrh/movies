$(document).ready(function () {
    // Welcome string
    console.log('Welcome to Movies Site');

    // Headhesive
    // Options
    let options = {
        offset: 400
    }

    // Create a new instance of Headhesive.js and pass in some options
    let header = new Headhesive('.header', options);

    // API KEY
    let apiKey = 'be274637c84b2bf658d5cf6a78fb8d74';

    // Card
    function Card() {
        let openCard = $('.movie-card'),
            card = $('.section-info');
        openCard.click(function () {
            let getID = this.value;

            card.addClass('-active');
            console.log('id-movie:  ' + getID + ', function openCard :  on');
        });

        let closeCard = $('.close-window');
        closeCard.click(function () {
            card.removeClass('-active');
            console.log('function openCard :  off');
        });
    }

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
            Card();
    });

    // Top Rated
    $.getJSON('https://api.themoviedb.org/3/movie/top_rated?api_key=' + apiKey + '&language=en-US&page=1', function (result) {
        let out = $('.top-rated');
        for (let i = 0; i < 12; i++){
            out.append('<button class="movie-card movie-list" value="' + result.results[i].id + '"><img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2' + result.results[i].poster_path + '" class="img-movie-list"><div class="blur-movie-list"><p class="name-movie-list">' + result.results[i].title + '</p></div></button>')
        }
        Card();
    });

    // Popular
    $.getJSON('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&language=en-US&page=1', function (result) {
        let out = $('.popular');
        for (let i = 0; i < 12; i++){
            out.append('<button class="movie-card movie-list" value="' + result.results[i].id + '"><img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2' + result.results[i].poster_path + '" class="img-movie-list"><div class="blur-movie-list"><p class="name-movie-list">' + result.results[i].title + '</p></div></button>')
        }
        Card();
    });

    // Upcoming
    $.getJSON('https://api.themoviedb.org/3/movie/upcoming?api_key=' + apiKey + '&language=en-US&page=1', function (result) {
        let out = $('.upcoming');
        for (let i = 0; i < 12; i++){
            out.append('<button class="movie-card movie-list" value="' + result.results[i].id + '"><img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2' + result.results[i].poster_path + '" class="img-movie-list"><div class="blur-movie-list"><p class="name-movie-list">' + result.results[i].title + '</p></div></button>')
        }
        Card();
    });

    // Top people
    $.getJSON('https://api.themoviedb.org/3/person/popular?api_key=' + apiKey + '&language=en-US&page=1', function (result) {
        console.log(result);
        let out = $('.top-people');
        for (let i = 0; i < 10; i++){
            out.append('<button class="movie-card movie-list" value="' + result.results[i].id + '"><img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2' + result.results[i].profile_path + '" class="img-movie-list"><div class="blur-actor-list"><p class="name-movie-list">' + result.results[i].name + '</p></div></button>')
        }
        Card();
    });





});