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

const icon = document.querySelector('.icon');
const search = document.querySelector('.search-bar');
const btnBlack = document.querySelector('.btn-black');

icon.onclick = function () {
    search.classList.toggle('active');
    btnBlack.classList.toggle('active');
}