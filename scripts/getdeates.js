const year = document.querySelector("#year");
const today = new Date();

const lastModifiedElement = document.getElementById('lastModifiedDate');
const lastModifiedDate = new Date(document.lastModified);
const formattedDate = lastModifiedDate.toLocaleString();

year.innerHTML = `&copy <span>${today.getFullYear()}</span> &#128051 Cristobal Henriquez &#128051 Canada`;

lastModifiedElement.textContent = 'Last Modified: ' + formattedDate;