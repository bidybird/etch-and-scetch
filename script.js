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

function adjustGrid(boxes) {
  resetColumnAmount(boxes);
  for (let n = 0; n < boxes; n++) {
    for (let i = 0; i < boxes; i++) {
      smallBox = document.createElement("div");
      smallBox.classList.add("smallBox");

      gridDiv.appendChild(smallBox);
    }
  }

  bigBoxDiv.appendChild(gridDiv);
  container.appendChild(bigBoxDiv);

  for (let i = 0; i < boxes * boxes; i++) {
    const allSmallBox = document.querySelectorAll(".smallBox");
    allSmallBox[i].addEventListener("mouseenter", changeBackground);
  }
}

const button = document.querySelector("#button");
button.addEventListener("click", displayPrompt);

function changeBackground(e) {
  e.target.style.background = "black";
}

function resetColumnAmount(columns) {
  let autoAmount = "auto ";
  for (let i = 0; i < columns - 1; i++) {
    autoAmount = autoAmount + "auto ";
  }
  console.log(autoAmount);
  gridDiv.style.gridTemplateColumns = autoAmount;
}

function displayPrompt() {
  removeAllChildNodes(gridDiv);
  mainValue = prompt("How many boxes and rows do you want?");
  while (mainValue > 100 || mainValue < 1) {
    mainValue = prompt("Enter a number between 0 and 100.");
  }
  mainValue = Number(mainValue);
  adjustGrid(mainValue);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
