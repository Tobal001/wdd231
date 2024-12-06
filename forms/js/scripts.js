// Grab the intire URL for this page including the attached GET values
const currentUrl = window.location.href;
console.log(currentUrl);

//Divide the url into two halves
const everything = currentUrl.split('?');
console.log(everything);// You do not need the console logs.

//Grab just the second half & break the form name value pairs into an array
let formData = everything[1].split('&');
console.log(formData);


function show(cup) {
    console.log(cup)
    formData.forEach((element) => {
        console.log(element)
        if (element.startsWith(cup)){
            result=element.split('=')[1].replace("%40", "@");
        }
    })

    return(result);
}

const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
    <p>Appointment for ${show("first")} ${show("last")}</p>
    <p>Proxy ${show("ordinance")} on ${show("fecha")} in the ${show("location")}
    <p>Your Phone ${show('phone')}</p>
    <p>Your Email ${show('email')}</p>`



