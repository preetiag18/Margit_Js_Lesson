const licenceNo = document.getElementById("lNumber");
const carMaker = document.getElementById("carMaker");
const carModel = document.getElementById("carModel");
const carOwner = document.getElementById("carOwner");
const carPrice = document.getElementById("carPrice");
const carColor = document.getElementById("carColor");
const carForm = document.querySelector('form');

const searchLNumber = document.getElementById("searchLNumber");
const searchResult = document.getElementById("searchResult");

const tableContainer = document.getElementById("table_container");

const carData = [];

const addRow = () =>{
    carData.push({
        lNo:  licenceNo.value,
        cMaker: carMaker.value,
        cModel: carModel.value,
        cOwner: carOwner.value,
        cPrice: carPrice.value,
        cColor: carColor.value,
    })

    let tableData = `<h2>Cars database</h2>
    <table>
        <thead>
            <tr>
                <td>Licence</td>
                <td>Maker</td>
                <td>Model</td>
                <td>Owner</td>
                <td>Price</td>
                <td>Color</td>
            </tr>
        </thead>
        <tbody>
            ${prepareRows(carData)}
        </tbody>
    </table>`;

    tableContainer.innerHTML = tableData;
};

const prepareRows = (carData) => {
    let data = "";
    carData.forEach(element => {
        let newRow = `
            <tr>
                <td>
                    ${element.lNo}
                </td>
                <td>
                  ${element.cMaker}
                </td>
                <td>
                ${element.cModel}
                </td>
                <td>
                ${element.cOwner}
                </td>
                <td>
                ${element.cPrice}
                </td>
                <td>
                ${element.cColor}
                </td>
            </tr>
        `
        data = data + newRow;
    });
    return data;
}

const search = () => {
    const x = searchLNumber.value;
    const matchItem = carData.find((item) => {
        return item.lNo == x;
    });
    if(matchItem === undefined) {
        searchResult.innerText = "No Cars found"
    } else {
        searchResult.innerText = `Car Found..!! It belongs to ${matchItem.cOwner} , car model is ${matchItem.cModel}`
    }
}
