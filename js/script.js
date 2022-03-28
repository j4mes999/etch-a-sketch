"use strict";

const GRID_SIZE = 600;//Size of the grid in px
const PIXEL_POS = "px";
const BORDER_THICKNESSX2 = 2; //change this parameters if border thickness changes, multiply x 2

let gridSize = 16;
const grid = document.querySelector(".grid");
drawGrid();

/**
 * Draws the grid depending the option of the user or by default
 */
function drawGrid(){

    for(let i = 1; i <= gridSize; i++){
        for(let j = 1; j <= gridSize; j++){
            let pixel = document.createElement("div");
            pixel.style.width = GRID_SIZE/gridSize - BORDER_THICKNESSX2 + PIXEL_POS;
            pixel.style.height = GRID_SIZE/gridSize - BORDER_THICKNESSX2 + PIXEL_POS;
            pixel.classList.add("square");
            pixel.style.gridColumnStart = j;
            pixel.style.gridColumnEnd = j + 1;
            grid.appendChild(pixel);
        }
    }

    //add the eventListeners
    const pixel = document.querySelectorAll(".square");
    pixel.forEach(elem => elem.addEventListener("mouseover",() =>{
        changeColor("#8acadd",elem)
    }));
}

function clearGrid(){
    grid.textContent = "";
}

function changeColor(color,elem){
    elem.style.backgroundColor = color;
}


//Eventlistener for the button
const button = document.querySelector(".clear-button");
button.addEventListener("click",() => {
  do{
    gridSize = prompt("Enter the size of the grid");
  }while(gridSize > 100)
  clearGrid();
  drawGrid();
});
