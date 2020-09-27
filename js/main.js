const url = "https://devfel.github.io/convertfloss/data/flosscolor.json";
//const url = "../data/flosscolor.json"; //Local Data
const table = ".floss-table";
const flossTable = document.querySelector(table);
let arrayColors = [];
let searchTerm = null;
let searchColumn = "name";

async function filterData() {
  cleanTable();
  try {
    const colorsRespose = await fetch(url);
    const colorsJSON = await colorsRespose.json();
    createTableTitles(flossTable);
    let searchTerm = document.getElementById("searchInput").value;
    let searchColumn = document.getElementById("ColumnValue").value;
    if (searchColumn === "name" || searchColumn === "rgb") {
      arrayColors = colorsJSON.filter((floss) =>
        floss[searchColumn].includes(searchTerm.toLowerCase())
      );
    } else {
      arrayColors = colorsJSON.filter(
        (floss) => floss[searchColumn] === searchTerm.toLowerCase()
      );
    }

    arrayColors.forEach((e) => createElementLIs(e, flossTable));
  } catch (erro) {
    console.log(erro);
    return [];
  }
}

function cleanTable() {
  let cleanTable = flossTable;
  cleanTable.innerHTML = "";
}

async function fetchColors() {
  cleanTable();
  try {
    const colorsRespose = await fetch(url);
    const colorsJSON = await colorsRespose.json();
    createTableTitles(flossTable);
    arrayColors = colorsJSON.map((floss) => floss);
    arrayColors.forEach((e) => createElementLIs(e, flossTable));
  } catch (erro) {
    console.log(erro);
    return [];
  }
}

/* Same as above but with fetch then
function fetchColors() {
  const url = "../data/flosscolor.json";
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      data.forEach((floss) => colorsArray.push(floss));
      console.log(colorsArray);
    });
}
*/
//colorsJSON.forEach((floss) => this.createElementLI(floss, flossContainer));

function createTableTitles(container) {
  let trNode = document.createElement("tr"); // Create a <ul> node to hold elemt values
  trNode.classList.add("table-title");

  // Create a <li> node for Sample atribute
  let tdSample = document.createElement("td");
  tdSample.textContent = "Sample";
  trNode.appendChild(tdSample);

  // Create a <li> node for name atribute
  let tdName = document.createElement("td");
  tdName.textContent = "Color Name";
  trNode.appendChild(tdName);

  // Create a <li> node for RGB atribute
  let tdRGB = document.createElement("td");
  tdRGB.textContent = "RGB";
  trNode.appendChild(tdRGB);

  // Create a <li> node for DMC atribute
  let tdDMC = document.createElement("td");
  tdDMC.textContent = "DMC";
  trNode.appendChild(tdDMC);

  // Create a <li> node for Anchor atribute
  let tdAnchor = document.createElement("td");
  tdAnchor.textContent = "Anchor";
  trNode.appendChild(tdAnchor);

  // Create a <li> node for Maxi atribute
  let tdMaxi = document.createElement("td");
  tdMaxi.textContent = "Maxi Mouline";
  trNode.appendChild(tdMaxi);

  // Create a <li> node for Sullivans atribute
  let tdSullivans = document.createElement("td");
  tdSullivans.textContent = "Sullivans";
  trNode.appendChild(tdSullivans);

  // Create a <li> node for Coats atribute
  let tdCoats = document.createElement("td");
  tdCoats.textContent = "J&P Coats";
  trNode.appendChild(tdCoats);

  container.appendChild(trNode);
}

function createElementLIs(elem, container) {
  let ulNode = document.createElement("tr"); // Create a <ul> node to hold elemt values
  ulNode.classList.add("floss-id-" + elem.id);

  // Create a <li> node for sample atribute
  let liSample = document.createElement("td");
  liSample.classList.add("sample");
  liSample.style.backgroundColor = elem.hexa;
  ulNode.appendChild(liSample);
  // Create a <li> node for name atribute
  let liName = document.createElement("td");
  liName.classList.add("name");
  liName.textContent = elem.name;
  ulNode.appendChild(liName);
  // Create a <li> node for RGB atribute
  let liRGB = document.createElement("td");
  liRGB.classList.add("rgb");
  liRGB.textContent = elem.rgb;
  ulNode.appendChild(liRGB);
  // Create a <li> node for dmc atribute
  let liDMC = document.createElement("td");
  liDMC.classList.add("dmc");
  liDMC.textContent = elem.dmc;
  ulNode.appendChild(liDMC);
  // Create a <li> node for anchor atribute
  let liAnchor = document.createElement("td");
  liAnchor.classList.add("anchor");
  liAnchor.textContent = elem.anchor;
  ulNode.appendChild(liAnchor);
  // Create a <li> node for maxi atribute
  let liMaxi = document.createElement("td");
  liMaxi.classList.add("maxi");
  liMaxi.textContent = elem.maxi;
  ulNode.appendChild(liMaxi);
  // Create a <li> node for sullivans atribute
  let liSullivans = document.createElement("td");
  liSullivans.classList.add("sullivans");
  liSullivans.textContent = elem.sullivans;
  ulNode.appendChild(liSullivans);
  // Create a <li> node for coats atribute
  let liCoats = document.createElement("td");
  liCoats.classList.add("coats");
  liCoats.textContent = elem.coats;
  ulNode.appendChild(liCoats);

  // adding the element to the div table
  container.appendChild(ulNode);
}

function init() {
  fetchColors();
}

init();
