
let fleet = []

function init() {

    const fleetString = localStorage.getItem("fleet");

    if (fleetString === undefined || fleetString === null) {
        fleet = [];
        return;
    }

    fleet = JSON.parse(fleetString);


    renderData(fleet);

}


function btnSave() {

    const carObject = {};
    carObject.mf = document.getElementById("tbCarMF").value;
    carObject.model = document.getElementById("tbCarModel").value;
    carObject.engine = document.getElementById("tbCarEngine").value;

    console.log({ carObject });

    fleet.push(carObject)

    const carObjectAsString = JSON.stringify(fleet);
    localStorage.setItem("fleet", carObjectAsString)

    renderData(fleet);

}

function btnRetrieve() {

    const carDataAsString = localStorage.getItem("fleet");

    if (carDataAsString === null || carDataAsString === undefined) {
        console.log(`No data found`);
        return;
    }

    const fleetAsObject = JSON.parse(carDataAsString);

    console.log(fleetAsObject);
}

function renderData(fleet) {

    let listingDiv = document.getElementById("tbodyCarData")

    listingDiv.innerHTML = '';
    htmlString = [];

    for(const [index, currentCar] of fleet.entries()) {

        console.log(`${index} ${currentCar.mf} ${currentCar.model} ${currentCar.engine}`);
        const removeButton = `<button class='btn  btn-primary' onclick='removeCar(${index})'>Remove ${index}</button>`;
        const rowItem = `<tr><td>${currentCar.mf}</td><td>${currentCar.model}</td><td>${currentCar.engine}</td><td>${removeButton}</td></tr>`

        htmlString.push(rowItem);

    }

    listingDiv.innerHTML = htmlString.join('');
}

function removeCar(indexOfCar) {

    console.log(`REmoving ${indexOfCar}`);

    fleet.splice(indexOfCar,1);

    localStorage.setItem("fleet",JSON.stringify(fleet));

    renderData(fleet);

}