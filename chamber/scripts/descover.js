import {places} from '../data/places.mjs';
const contentElement = document.querySelector('#content');

function displayPlaces(places) {
    places.forEach(place => {
        const card = document.createElement('div');
        const textContent = document.createElement('div');
        const nameElement = document.createElement('h3');
        const addressElement = document.createElement('p');
        const descriptionElement = document.createElement('p');
        const costElement = document.createElement('p');
        const imgContainer = document.createElement('div');
        const image = document.createElement('img');
        
        nameElement.textContent = place.name;
        addressElement.textContent = place.address;
        descriptionElement.textContent = place.description;
        costElement.textContent = `Cost: ${place.cost}`;

        card.setAttribute('class', 'place-card');
        textContent.setAttribute('class', 'place-text');
        imgContainer.setAttribute('class', 'place-img');
        
        image.setAttribute('src', place.photo_url);
        image.setAttribute('alt', `Image of ${places.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', '225');

        card.appendChild(nameElement);
        card.appendChild(textContent);
        card.appendChild(imgContainer);
        imgContainer.appendChild(image);
        textContent.appendChild(addressElement);
        textContent.appendChild(descriptionElement);
        textContent.appendChild(costElement);

        contentElement.appendChild(card);
        
    });
}

displayPlaces(places);

//EVENTS CHART
const randomEvents = [
    { date: "2024-12-15", event: "Edmonton Winter Market", location: "Downtown Square" },
    { date: "2024-12-20", event: "Holiday Lights Festival", location: "River Valley Park" },
    { date: "2024-12-25", event: "Christmas Celebration", location: "Main Street Church" },
    { date: "2024-12-31", event: "New Year's Eve Fireworks", location: "West Edmonton Mall" },
    { date: "2025-01-05", event: "Community Fitness Day", location: "Local Gymnasium" },
];


function loadEvents() {
    const eventsList = document.getElementById("events-list");

    randomEvents.forEach((event) => {
        const row = document.createElement("tr");

        const dateCell = document.createElement("td");
        dateCell.textContent = event.date;

        const eventCell = document.createElement("td");
        eventCell.textContent = event.event;

        const locationCell = document.createElement("td");
        locationCell.textContent = event.location;

        row.appendChild(dateCell);
        row.appendChild(eventCell);
        row.appendChild(locationCell);

        eventsList.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", loadEvents);

// LAST VISIT LOCAL STORAGE

document.addEventListener("DOMContentLoaded", () => {
  
    const now = Date.now();

    const visitMessageContainer = document.getElementById('visitMessage');
    const visitMessage = document.createElement('h2');

    visitMessageContainer.appendChild(visitMessage);

    const lastVisit = localStorage.getItem('lastVisit');

    if (!lastVisit) {

        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {

        const timeDifference = now - parseInt(lastVisit, 10);
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        }else if(daysDifference === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysDifference} days ago.`;
        }
    }

    // Update the last visit timestamp in localStorage
    localStorage.setItem('lastVisit', now.toString());
});
