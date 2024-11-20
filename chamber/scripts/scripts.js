const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('#animateme');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

// CREATING BUSINESS CARDS
function fetchBusinessData() {
    fetch('data/members.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            createBusinessCards(data); 
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function createBusinessCards(data) { 
    const container = document.getElementById("business-cards");

    data.forEach(business => {
        const card = document.createElement('div');
        card.classList.add('business-card');

        const img = document.createElement('img');
        img.src = business.image_icon;
        img.alt = `${business.name} icon`;
        card.appendChild(img);

        const name = document.createElement('h3');
        name.textContent = business.name;
        card.appendChild(name);

        const address = document.createElement("p");
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

        container.appendChild(card);
    });
}

fetchBusinessData();

document.getElementById('list').addEventListener('click', () => {
    const container = document.getElementById('business-cards');
    container.classList.add('list-view');

    const cards = container.querySelectorAll('.business-card');
    cards.forEach(card => {
        card.classList.add('list-item'); /
        card.style.padding = ''; 
    });
});

document.getElementById('grid').addEventListener('click', () => {
    const container = document.getElementById('business-cards');
    container.classList.remove('list-view');

    const cards = container.querySelectorAll('.business-card');
    cards.forEach(card => {
        card.classList.remove('list-item'); 
    });
});


// Update the footer with the current year and last modified date
const year = document.querySelector("#year");
const today = new Date();

const lastModifiedElement = document.getElementById('lastModifiedDate');
const lastModifiedDate = new Date(document.lastModified);
const formattedDate = lastModifiedDate.toLocaleString();

year.innerHTML = `&copy <span>${today.getFullYear()}</span> Timbucktu Chamber of Commerce`;

lastModifiedElement.textContent = 'Last Modified: ' + formattedDate;
