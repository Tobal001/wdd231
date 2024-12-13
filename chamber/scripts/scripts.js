//Current Weather API
const currentTemp = document.querySelector('#temperature');
const description = document.querySelector('#description');
const weatherIcon = document.querySelector('#icon');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49&lon=6.63&units=metric&appid=5307b09761b4d03a778816e0e7a4520b';

const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=49&lon=6.63&cnt=24&units=metric&appid=5307b09761b4d03a778816e0e7a4520b';

async function fetchForecast() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const forecastData = await response.json();
            console.log(forecastData);
            displayForecast(forecastData);
        } else {
            console.error('Error fetching data:', response.statusText);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function displayForecast(data) {
    // Group forecasts by date
    const forecastsByDate = {};
    data.list.forEach(item => {
        const date = item.dt_txt.split(' ')[0]; // Extract date (YYYY-MM-DD)
        if (!forecastsByDate[date]) {
            forecastsByDate[date] = [];
        }
        forecastsByDate[date].push(item);
    });

    // Get the next 3 days
    const dates = Object.keys(forecastsByDate).slice(0, 3);

    dates.forEach((date, index) => {
        const dailyForecasts = forecastsByDate[date];

        // Calculate average temperature
        const avgTemp = dailyForecasts.reduce((sum, item) => sum + item.main.temp, 0) / dailyForecasts.length;

        // Update the appropriate element
        document.querySelector(`#day${index + 1}`).innerHTML = `<strong>${avgTemp.toFixed(0)}</strong>&deg;C`;
    });
}

// Call the function to fetch and display data
fetchForecast();


//GRAB THE CURRENT WEATHER API
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const weatherData = await response.json();
            console.log(weatherData);
            displayData(weatherData);
        } 
    } catch (error) {
        console.log(error);
    }
}

function displayData(data) {
    document.querySelector("#temperature").innerHTML = `<strong>${data.main.temp.toFixed(0)}</strong>&deg;C`;
    document.querySelector("#description").innerHTML = `${data.weather[0].description}`;


    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    let description = data.weather[0].description;


    document.querySelector('#icon').setAttribute('src', iconsrc);
    document.querySelector('#icon').setAttribute('alt', description);
};


apiFetch();

//HAMBURGER MENU
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});


//BUSINESS CARD DATA FETCH
function fetchBusinessData() {
    fetch('data/members.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (document.getElementById('business-cards')) {
                displayAllBusinesses(data);
            }
            if (document.getElementById('spotlight-cards')) {
                displaySpotlightBusinesses(data);
            }

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Call the fetch function
fetchBusinessData();

//RANDOMIZE THE GOLD BUSINESS MEMBERS 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

//
function displayAllBusinesses(data) {
    const businessCards = document.getElementById('business-cards');
    data.forEach(business => {
        const card = createBusinessCard(business);
        businessCards.appendChild(card);
    });
}

function displaySpotlightBusinesses(data) {
    const spotlightCards = document.getElementById('spotlight-cards'); // Reference spotlight-cards element
    const filterBusinesses = data.filter(business => [1, 2].includes(business.membership_level));
    const shuffledFiltered = shuffleArray([...filterBusinesses]); // Use the correct variable
    const randomSpotlights = shuffledFiltered.slice(0, 3);
    randomSpotlights.forEach(business => {
        const card = createBusinessCard(business);
        card.classList.add('spotlight-card');
        spotlightCards.appendChild(card);
    });
}   

// Function to create a business card
function createBusinessCard(business) {
    const card = document.createElement('div');
    card.classList.add('business-card');

    const img = document.createElement('img');
    img.src = business.image_icon;
    img.alt = `${business.name} icon`;
    img.width = 100; 
    img.height = 100; 
    img.loading = "lazy";
    card.appendChild(img);

    const name = document.createElement('h3');
    name.textContent = business.name;
    card.appendChild(name);

    const address = document.createElement('p');
    address.textContent = business.address;
    card.appendChild(address);

    const phone = document.createElement('p');
    phone.textContent = business.phone_number;
    card.appendChild(phone);

    const website = document.createElement('a');
    website.href = business.website_url;
    website.textContent = 'Visit Website';
    website.target = '_blank';
    card.appendChild(website);

    return card;
}

//CREATING A GRID AND LIST  BUTTON 
document.addEventListener('DOMContentLoaded', () => {
    const listButton = document.getElementById('list');
    const gridButton = document.getElementById('grid');
    if (listButton) {
        listButton.addEventListener('click', () => {
            const container = document.getElementById('business-cards');
            if (!container) return;

            container.classList.add('list-view');

            const cards = container.querySelectorAll('.business-card');
            cards.forEach(card => {
                card.classList.add('list-item');
                card.style.removeProperty('padding');
            });
        });
};




// Update the footer with the current year and last modified date
const year = document.querySelector("#year");
const today = new Date();

const lastModifiedElement = document.getElementById('lastModifiedDate');
const lastModifiedDate = new Date(document.lastModified);
const formattedDate = lastModifiedDate.toLocaleString();

year.innerHTML = `&copy <span>${today.getFullYear()}</span> Timbucktu Chamber of Commerce`;

lastModifiedElement.textContent = 'Last Modified: ' + formattedDate;

});
