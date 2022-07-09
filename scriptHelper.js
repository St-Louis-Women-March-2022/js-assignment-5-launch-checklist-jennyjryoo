// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.innerHTML=`
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distnace from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src=${imageUrl}>
    `
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput === "") {
    return "Empty"
   } else if (isNaN(testInput) === true) {
    return "Not a Number"
   } else {
    return "Is a Number"
   }
}

function formSubmission(pilot, copilot, fuelLevel, cargoLevel) {
    
   if (validateInput(pilot) !== "Not a Number") {
    alert("Pilot's name should be a string");
    event.preventDefault();
   } else if (validateInput(copilot) !== "Not a Number") {
    alert("Copilot's name should be a string");
    event.preventDefault();
   } else if (validateInput(fuelLevel) !== "Is a Number") {
    alert ("Fuel level should be a number");
    event.preventDefault();
   } else if (validateInput(cargoLevel) !== "Is a Number"){
    alert ("Cargo mass should be a number");
    event.preventDefault();
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*6);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
