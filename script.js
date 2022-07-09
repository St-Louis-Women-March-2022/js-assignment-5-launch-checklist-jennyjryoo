// Write your JavaScript code here!

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit",function(event){
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]").value;
        let copilotInput = document.querySelector("input[name=copilotName]").value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
        let cargoMassInput = document.querySelector("input[name=cargoMass]").value;
        formSubmission(pilotInput, copilotInput, fuelLevelInput, cargoMassInput);
        document.getElementById("pilotStatus").innerHTML = "Pilot "+pilotInput+" is ready for launch";
        document.getElementById("copilotStatus").innerHTML = "Co-pilot "+copilotInput+" is ready for launch";
        if (fuelLevelInput < 10000){
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey.";
            document.getElementById("launchStatus").innerHTML ="Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
        }
        else if (cargoMassInput > 10000){
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off.";
            document.getElementById("launchStatus").innerHTML ="Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = "red";
        } else {
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
            document.getElementById("launchStatus").style.color = "green";           
        };
    });
    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
    //    console.log(listedPlanets);
   }).then(function () {
       let pickedPlanet = pickPlanet(listedPlanets);
    //    console.log(pickedPlanet);
    let missionTarget = document.getElementById("missionTarget");
    addDestinationInfo(missionTarget, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});