
let fleet = []

function init() {
}


function btnSave() {

    const carObject = {};
    carObject.mf = document.getElementById("tbCarMF").value;
    carObject.model = document.getElementById("tbCarModel").value;
    carObject.engine = document.getElementById("tbCarEngine").value;

    console.log({carObject});

    fleet.push(carObject)    

    const carObjectAsString = JSON.stringify(fleet);
    localStorage.setItem("fleet",carObjectAsString)

}

function btnRetrieve () {

    const carDataAsString = localStorage.getItem("fleet");

    if (carDataAsString === null || carDataAsString === undefined) {
        console.log(`No data found`);
        return;
    }

    const fleetAsObject = JSON.parse(carDataAsString);

    console.log(fleetAsObject);
}