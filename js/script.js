const GRID_SIZE = 600;//Size of the grid in px
const PIXEL_POS = "px";
const BORDER_THICKNESSX2 = 2; //change this parameters if border thickness changes, multiply x 2
//delete after finishing:
const USER_CHOICE = 16;

// let gridSquare = document.createElement("div");
// gridSquare.style.width = GRID_SIZE/2 + PIXEL_POS;
// gridSquare.style.height = GRID_SIZE/2 + PIXEL_POS;
// gridSquare.classList.add("square");

const grid = document.querySelector(".grid");
 

for(let i = 1; i <= USER_CHOICE; i++){
    for(let j = 1; j <= USER_CHOICE; j++){
      let pixel = document.createElement("div");
      pixel.style.width = GRID_SIZE/USER_CHOICE - BORDER_THICKNESSX2 + PIXEL_POS;
      pixel.style.height = GRID_SIZE/USER_CHOICE - BORDER_THICKNESSX2 + PIXEL_POS;
      pixel.classList.add("square");
      pixel.style.gridColumnStart = j;
      pixel.style.gridColumnEnd = j + 1;
      grid.appendChild(pixel);
    }
}

const pixel = document.querySelectorAll(".square");

pixel.forEach(elem => elem.addEventListener("mouseover",() =>{
    changeColor("red",elem)
}));

const button = document.querySelector(".clear-button");
button.addEventListener("click",() => {
  pixel.forEach(e => changeColor("white",e));
  
  do{
    gridSize = prompt("Enter the size of the grid");
  }while(gridSize > 100)
  console.log("gridsize: "+gridSize);
});

function changeColor(color,elem){
    elem.style.backgroundColor = color;
}