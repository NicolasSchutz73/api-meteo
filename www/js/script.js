const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api-meteo.netlify.app/php/data.php",
    "method": "GET",
    "headers": {}
};

$.ajax(settings).done(function (response) {
    response = JSON.parse(response);

    console.log(response);

    $('div.city p').text(response.data[0].city_name);
    $('div#wind span').text(Math.round(response.data[0].wind_spd) +' km/h');
    $('div#sunrise span').text(response.data[0].sunrise);
    $('div#sunset span').text(response.data[0].sunset);
    $('div#precipitation span').text(response.data[0].precip+' mm');
    $('h1.celsus').text(Math.round(response.data[0].temp)+'°');

    let date = new Date();
    numberday = date.getDate();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let name = month[date.getMonth()];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[date.getDay()];

    $('div.date p').text(day +" "+numberday+" "+name);
});

// search bar
const icon = document.querySelector('.icon');
const search = document.querySelector('.search-bar');
const btnBlack = document.querySelector('.btn-black');

icon.onclick = function () {
    search.classList.toggle('active');
    btnBlack.classList.toggle('active');
}
