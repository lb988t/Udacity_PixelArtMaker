const szPicker = document.querySelector('#sizePicker');
const pxCanvas = document.querySelector('#pixelCanvas');
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    // Your code goes here!
    let gridHeight = document.querySelector('#inputHeight').value;
    let gridWidth = document.querySelector('#inputWidth').value;

    while (pxCanvas.firstChild) {
        pxCanvas.removeChild(pxCanvas.firstChild);
    }

    for (i = 1; i <= gridHeight; i++) {
        let gRow = document.createElement('tr');
        pxCanvas.appendChild(gRow);
        for (j = 1; j <= gridWidth; j++) {
            let gCell = document.createElement('td');
            gRow.appendChild(gCell);

            gCell.addEventListener('mousedown', function() {
                const color = document.querySelector('#colorPicker').value;
                gCell.style.backgroundColor = color;
            })
        }
    }
}
makeGrid(25, 25);

szPicker.addEventListener('submit', function(e) {
    e.preventDefault();
    makeGrid();
});