import {ScaleNames} from "./enums.js"
import { Scales } from "./scales.js"

var neckColor = "#F7CA9D"
var fretColor = "#B69A79"
var dotColor = "#1B130A"
var stringColor = "#FAB237"

let columnWidth = 40;
let rowHeight = 40;
let strokeWidth = 2;

class Scale {
  constructor(key, scale, mode) {
    this.key = key;
    this.scale = scale;

  }

}

const scales = {};
scales.key = 'C';

scales.major = {}
scales.major.ionian = [2, 2, 1, 2, 2, 2, 1]
scales.major.dblharmonic = [1, 3, 1, 2, 1, 3, 1]

scales.minor = {}
scales.minor.melodic = [2, 1, 2, 2, 2, 2, 1]
scales.minor.harmonic = [2, 1, 2, 2, 1, 3, 1]
scales.minor.pentatonic = [3, 2, 2, 3, 2]
scales.minor.blues = [3, 2, 1, 1, 3, 2]
scales.bebop = [2, 2, 1, 2, 2, 1, 1, 1]

const frets = {};
frets.number = 5;
frets.first = 1;
frets.current = 5;

const notes = {};
notes.sharps = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
notes.flats = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

const gString = {};
gString.name = ['E', 'A', 'D', 'G', 'B', 'E'];
gString.number = 6;
gString.current = 2;

// init svg container
let svgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgContainer.setAttribute("width", "500");
svgContainer.setAttribute("height", "2300");
svgContainer.setAttribute("viewBox", "0 0 500 300"); // Add a viewBox attribute
// Add padding to the SVG container using CSS
svgContainer.style.padding = "20px";
document.querySelector('#fretboard').appendChild(svgContainer);


function displayFretboard()
{
  for (let i = 0; i < gString.number - 1; i++) {
    for (let j = 0; j < frets.number; j++) {
      // Create a rectangle for the row background
      let rowRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rowRect.setAttribute("x", j * columnWidth);
      rowRect.setAttribute("y", i * rowHeight);
      rowRect.setAttribute("width", columnWidth);
      rowRect.setAttribute("height", rowHeight);
      rowRect.setAttribute("fill", neckColor);
      rowRect.setAttribute("stroke", fretColor); // Add a colored stroke
      rowRect.setAttribute("stroke-width", strokeWidth); // Set the stroke width
      svgContainer.appendChild(rowRect);
    }
  }
  svgContainer.setAttribute("width", "550");
  svgContainer.setAttribute("height", "550");
}

function displayDots(string, fret)
{
  let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", columnWidth / 2); // x-coordinate of the center of the circle
  circle.setAttribute("cy", rowHeight / 2); // y-coordinate of the center of the circle
  circle.setAttribute("r", 17); // radius of the circle
  circle.setAttribute("fill", dotColor); // color of the circle
  svgContainer.appendChild(circle);


  circle.setAttribute("cx", (columnWidth) * (fret - 0.5)); // déplace de 3 cases vers la droite
  circle.setAttribute("cy", rowHeight * (string - 1)); // déplace de 6 cases vers le bas
}

function defineScale(key, formula)
{
  let currentScale = [];
  
  for(let i = 0; i < formula.length; i++)
    {
      
    }
}

console.log(Scales.mothers[ScaleNames.Ionian].formula.);
displayFretboard()
displayDots(gString.current, frets.current)
