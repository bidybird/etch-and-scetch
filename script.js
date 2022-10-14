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

//watch(mainValue, adjustGrid);

adjustGrid();

function adjustGrid() {
  for (let n = 0; n < mainValue; n++) {
    for (let i = 0; i < mainValue; i++) {
      smallBox = document.createElement("div");
      smallBox.classList.add("smallBox");

      gridDiv.appendChild(smallBox);
    }
  }
  console.log(gridDiv);

  console.log(gridDiv);
  console.log(bigBoxDiv);
  bigBoxDiv.appendChild(gridDiv);
  container.appendChild(bigBoxDiv);
  console.log(container);

  for (let i = 0; i < mainValue * mainValue; i++) {
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
  mainValue = prompt("How many columns and rows do you want?");
  mainValue = Number(mainValue);
}
