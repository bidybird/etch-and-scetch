const container = document.querySelector("#container");
const bigBoxDiv = document.createElement("div");
bigBoxDiv.setAttribute("id", "bigBox");
bigBoxDiv.classList.add("box");

const gridDiv = document.createElement("div");
gridDiv.classList.add("gridDiv");
gridDiv.setAttribute("id", "grid");
console.log(gridDiv);

let smallBox = null;

let mainValue = 16;

adjustGrid(mainValue);

function adjustGrid(columns) {
  for (let n = 0; n < columns; n++) {
    for (let i = 0; i < columns; i++) {
      smallBox = document.createElement("div");
      smallBox.classList.add("smallBox");

      gridDiv.appendChild(smallBox);
    }
  }

  bigBoxDiv.appendChild(gridDiv);
  container.appendChild(bigBoxDiv);

  for (let i = 0; i < columns * columns; i++) {
    const allSmallBox = document.querySelectorAll(".smallBox");
    allSmallBox[i].addEventListener("mouseenter", changeBackground);
  }
}

const button = document.querySelector("#button");
button.addEventListener("click", displayPrompt);

function changeBackground(e) {
  console.log(e);
  console.log(e.target);
  e.target.style.background = "red";
}

function displayPrompt() {
  removeAllChildNodes(gridDiv);
  mainValue = prompt("How many columns and rows do you want?");
  mainValue = Number(mainValue);
  adjustGrid(mainValue);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
