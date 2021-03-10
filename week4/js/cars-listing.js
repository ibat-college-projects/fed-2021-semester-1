function init() {

    console.log({ fleetSalesObject });

    setUpCascadingList()
}

function setUpCascadingList() {

    var selectMf = document.getElementById("selectMf");
    var selectModel = document.getElementById("selectModel")
    var selectVersion = document.getElementById("selectVersion")

    for(let mf in fleetSalesObject) {

       // selectMf.options[selectMf.options.length] = new Option(mf,mf);

        selectMf.options.add( new Option(mf,mf) );
    }




}