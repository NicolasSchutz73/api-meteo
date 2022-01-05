const settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost/api-meteo/www/php/data.php",
    "method": "GET",
    "headers": {}
};

$.ajax(settings).done(function (response) {
    console.log(response);
});