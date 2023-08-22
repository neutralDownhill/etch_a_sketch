const container = document.getElementById('container');

function createGrid() {
    const existingDivs = document.querySelectorAll('#container div');
    existingDivs.forEach(div => div.remove());

    const gridSize = prompt('How many squares per side of grid?', '10');
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const newDiv = document.createElement('div');
        const gridDivWidth = 100 / gridSize;
        newDiv.style.width = "calc(" + gridDivWidth + "% - 1px)";
        container.appendChild(newDiv);
        
    }

    const divs = document.querySelectorAll('#container div');
    divs.forEach(div => div.addEventListener('mouseover', sketchOnHover));
}








createGrid();


const btn = document.getElementById('newGridBtn');
btn.addEventListener('click', createGrid);

const divs = document.querySelectorAll('#container div');
divs.forEach(div => div.addEventListener('mouseover', sketchOnHover));

function sketchOnHover(e) {
    const hoveredDiv = e.target;
    hoveredDiv.classList.add('hoveredDiv');
}