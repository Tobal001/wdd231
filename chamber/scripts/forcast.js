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
