function onSelectChange(e) {

    console.log(`Select List has changed`);

    const currentIndex = e.selectedIndex;

    console.log(`Chosen index is ${currentIndex}`);

    if (currentIndex > 0) {

        const value = e.value;
        console.log(`Chosen value is ${value}`);

        const textValue = e.options[currentIndex].text;
      ///  const textValue = e.options.currentText;
        console.log(`Chosen text value is ${textValue}`);

    }

}


function clearItems() {
    console.log(`clearItems() is called`);

    // similar to document.getElementById - we use # to get by id, and a dot (.) to retrieve by class
  //  const selectedObject = document.querySelector('#myListOfCities');
    const selectedObject = document.querySelector('.cityListing');

    selectedObject.options.length =0;

}

function loadItems() {
    console.log(`loadItems() is called`);

    // Choosing by # to illustrate different techniques
    const selectedObject = document.querySelector('#myListOfCities');

    let option1 = document.createElement("option");
    let option2 = document.createElement("option");

    option1.value = '300';
    option1.text = 'Limerick';

    option2.value = '400';
    option2.text = 'Galway';
  
    selectedObject.add(option1,null);
    selectedObject.add(option2,null);

    let countItems = selectedObject.options.length;

    console.log(`Total Items is ${countItems}`);

}