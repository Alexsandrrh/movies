$(document).ready(function () {
    // API KEY
    let apiKey = 'be274637c84b2bf658d5cf6a78fb8d74';

    // Owl Carousel and Random Photo
    let getRandomPoster = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + apiKey + '&language=en_EN&page=1';
    $.getJSON(getRandomPoster, function (array) {
        console.log(array);
        let result = array.results,
            blockSlide = $('.section-slide');
        for (let i = 0; i < result.length; i++){
            if(i == 9){
                continue;
            }else {
                blockSlide.append('<div class="movie-data"><img src="https://image.tmdb.org/t/p/w1400_and_h450_face' + result[i].backdrop_path + '" alt="" class="movie-bg"><div class="movie-data-info"><img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2' + result[i].poster_path + '" alt="" class="movie-poster"><button class="movie-name js-open-movie" value="' + result[i].id + '">' + result[i].title + '</button><span class="movie-vope">' + result[i].vote_average + '</span></div></div>');
            }
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

    // List Movie
    let getListMovies = 'https://api.themoviedb.org/3/movie/383498?api_key=' + apiKey + '&language=en_EN';
    $.getJSON(getListMovies, function (array) {
        console.log(array);
        let result = array;
        console.log(result.title);
        console.log(result.vote_average);
        for (let i = 0; i < result.genres.length; i++) {
            console.log(result.genres[i].name);
        }
        console.log(result.overview);
    });

    $.getJSON('https://api.themoviedb.org/3/movie/383498/credits?api_key=' + apiKey + '', function (result) {
        console.log(result)
        for (let i = 0; i < result.cast.length; i++) {
            console.log(result.cast[i].character + '  =>  ' + result.cast[i].name);
        }
    });

    $.getJSON('https://api.themoviedb.org/3/movie/383498/images?api_key=' + apiKey + '&language=en-US', function (result) {
       console.log(result);
    });

    let btnMovie = $('.js-open-movie');
    btnMovie.click(function () {
        console.log(this.val());
    });
});