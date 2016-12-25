$(document).ready(function() {

    // the base url for all api calls
    var apiBaseUrl = 'http://api.themoviedb.org/3/';
    // the base url for searching
    var imageBaseUrl = 'http://image.tmdb.org/t/p/';
    // now playing constant url
    const nowPlayingUrl = apiBaseUrl + 'movie/now_playing?api_key=' + apiKey;

    const latestMovies = apiBaseUrl + 'movie/latest?api_key=' + apiKey;

    const popularMovies = apiBaseUrl + 'movie/popular?api_key=' + apiKey;

    $.getJSON(nowPlayingUrl, function(nowPlayingData) {
        console.log(nowPlayingData);
        var nowPlayingHTML = '';
        for (let i = 0; i < nowPlayingData.results.length; i++) {
            var poster = imageBaseUrl + 'w300' + nowPlayingData.results[i].poster_path;
            nowPlayingHTML += '<div class="grid-item latest col-sm-3">';
            nowPlayingHTML += '<img src="' + poster + '">';
            nowPlayingHTML += '</div>';
        }

        $('.movieContainer').html(nowPlayingHTML);
    })

});
