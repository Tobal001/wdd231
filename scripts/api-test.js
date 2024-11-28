// SELECT HTML ELEMENTS IN THE DOCUMENT
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

//CONSTRUCT A FULL PATH USING TEMPLATE LITERALS (`${}`)
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49&lon=6.63&units=metric&appid=5307b09761b4d03a778816e0e7a4520b';


//GRTAB THE CURRENT WEATHER API
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const weatherdata = await response.json();
            console.log(weatherdata);
            displayData(weatherdata);
        } 
    } catch (error) {
        console.log(error);
    }
}

function displayData(data) {
   document.querySelector('#current-temp').innerHTML = `<strong>${data.main.temp}</strong>&deg;C`;
}

apiFetch();
