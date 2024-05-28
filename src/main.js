var neckColor = "#F7CA9D"
var fretColor = "#B69A79"
var neckdotColor = "#1B130A"
var stringColor = "#FAB237"
let columnWidth = 40;
let rowHeight = 40;
let strokeWidth = 2;

// Define the outline widths between the columns


let fretNumber = 5;
let stringNumber = 6

const notes = {};
notes.name = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const gString = {};
gString.name = ['E', 'A', 'D', 'G', 'B', 'E'];

// init svg container
let svgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgContainer.setAttribute("width", "500");
svgContainer.setAttribute("height", "2300");
svgContainer.setAttribute("viewBox", "0 0 500 300"); // Add a viewBox attribute
// Add padding to the SVG container using CSS
svgContainer.style.padding = "20px";
document.querySelector('#fretboard').appendChild(svgContainer);



// Create the column and rows
for (let i = 0; i < stringNumber - 1; i++) {
  for (let j = 0; j < fretNumber; j++) {
    // Create a rectangle for the row background
    let rowRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rowRect.setAttribute("x", j * columnWidth);
    rowRect.setAttribute("y", i * rowHeight);
    rowRect.setAttribute("width", columnWidth);
    rowRect.setAttribute("height", rowHeight);
    rowRect.setAttribute("fill", "lightgray");
    rowRect.setAttribute("stroke", "black"); // Add a black stroke
    rowRect.setAttribute("stroke-width", strokeWidth); // Set the stroke width
    svgContainer.appendChild(rowRect);
  }
}

let currentString = 6; // between 1 and 6
let currentFret = 1 // entre la case 1 et la dernière case


let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute("cx", columnWidth / 2); // x-coordinate of the center of the circle
circle.setAttribute("cy", rowHeight / 2); // y-coordinate of the center of the circle
circle.setAttribute("r", 17); // radius of the circle
circle.setAttribute("fill", "blue"); // color of the circle
svgContainer.appendChild(circle);




circle.setAttribute("cx", (columnWidth) * (currentFret - 0.5)); // déplace de 3 cases vers la droite
circle.setAttribute("cy", rowHeight * (currentString - 1)); // déplace de 6 cases vers le bas

svgContainer.setAttribute("width", "550");
svgContainer.setAttribute("height", "550");