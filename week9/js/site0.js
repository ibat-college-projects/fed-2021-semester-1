function init() {

    console.log(`I am the init function`)
    startStorageDemo();
    loadStorageItem();

}

function startStorageDemo() {

    localStorage.setItem("today","Wednesday");

}

function loadStorageItem() {

    const day = localStorage.getItem("today");

    console.log(`My day is ${day}`);


}

function btnSave() {
    const flavour = document.getElementById("tbFlavour").value;
    console.log(`I am saving the flavour ${flavour}`);
    localStorage.setItem('flavour', flavour);

}

function btnRetrieve() {
    console.log('I am retrieving')
    const flavour = localStorage.getItem("flavour");
    console.log(`flavour is ${flavour}`)

    document.getElementById("messagePanel").innerHTML = flavour;

}
