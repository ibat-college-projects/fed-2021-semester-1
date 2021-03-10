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

}

function loadItems() {
    console.log(`loadItems() is called`);

}