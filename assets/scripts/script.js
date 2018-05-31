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

    });
});