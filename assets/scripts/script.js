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

    // Preloader
    let preloader = $('.window-preloader');
    setTimeout(function () {
        preloader.addClass('-close');
    }, 2000);









});