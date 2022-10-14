const container = document.querySelector("#container");
const bigBoxDiv = document.createElement("div");
bigBoxDiv.setAttribute("id", "bigBox");
bigBoxDiv.classList.add("box");

const gridDiv = document.createElement("div");
gridDiv.classList.add("gridDiv");
gridDiv.setAttribute("id", "grid");
console.log(gridDiv);

let smallBox = null;

const boxWidth = [];
boxWidth.length = 16;

// this will occur 16 by 16 times 256 times
for (let n = 0; n < boxWidth.length; n++) {
  for (let i = 0; i < boxWidth.length; i++) {
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

for (let i = 0; i < boxWidth.length * boxWidth.length; i++) {
  const allSmallBox = document.querySelectorAll(".smallBox");
  allSmallBox[i].addEventListener("mouseenter", changeBackground);
}

function changeBackground(e) {
  console.log(e);
  console.log(e.target);
  e.target.style.background = "red";
}
