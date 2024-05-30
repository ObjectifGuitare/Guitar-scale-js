import {ScaleNames} from "./enums.js"
import { Scales } from "./scales.js"

var neckColor = "#F7CA9D"
var fretColor = "#B69A79"
var dotColor = "#1B130A"
var stringColor = "#FAB237"

let columnWidth = 40;
let rowHeight = 40;
let strokeWidth = 2;

let sharpSet = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
let flatSet = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
let tuning = ['E', 'A', 'D', 'G', 'B', 'E'];

class Scale {
  constructor(key, scale, mode) {
    this.key = key;
    this.scale = scale;

  }

}

const frets = {};
frets.number = 5;
frets.first = 1;
frets.current = 1;

const gString = {};
gString.number = 6;
gString.current = 2;


function svgInit(svgContainer)
{
  svgContainer.setAttribute("width", "500");
  svgContainer.setAttribute("height", "2300");
  svgContainer.setAttribute("viewBox", "0 0 500 300"); // Add a viewBox attribute
  svgContainer.style.padding = "20px";
  document.querySelector('#fretboard').appendChild(svgContainer);
}

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

function logFretBoard(stringSet)
{
  for (let string = 0; string < gString.number; string++)
    {
      console.log(stringSet[string]);
    }
}

function tune()
{
  let stringSet = [];
  let openStringNoteIndex;
  let currentNoteIndex;
  for (let string = 0; string < gString.number; string++)
  {
    stringSet[string] = [];
    openStringNoteIndex = getNoteIndex(flatSet, tuning[string]); //flatset should be removed for noteSet
    console.log(tuning[string])
    for (let fret = 0; fret < 12; fret++)
    {
      currentNoteIndex = (openStringNoteIndex + fret) % 12;
      stringSet[string][fret] = flatSet[currentNoteIndex]; //flatset should be removed for noteSet
    }
  }
  return (stringSet);
}

function displayScale(scale)
{
  
  // while()
  // {
  //   if ()
  //       displayDots()

  // }
}

function sharpOrFlat(note)
{
  // if (note.localeCompare('C#') == 0)
  //   return sharpSet;
  return flatSet;
  // highly simplified version. Should include a note + mode criteria
}

function getNoteIndex(noteSet, note)
{
  let noteIndex = 0;
  
  while(noteSet[noteIndex] != note)
    noteIndex++;
  return (noteIndex);
}

var KeySelect = document.getElementById("key-select");
let Key = KeySelect.value;
KeySelect.addEventListener('change', function() {
  Key = this.value
})

var ScaleSelect = document.getElementById("scale-select");
let scale = [];
ScaleSelect.addEventListener('change', function() {
  let noteSet = sharpOrFlat(Key);
  let i = getNoteIndex(noteSet, Key);
  let j = 0;
  let workingScale = Scales.mothers[this.value];
  while(j < workingScale.length) // the selected scale gets created through this loop
  {
    scale[j] = noteSet[i];
    i = (i + workingScale.formula[j]) % 12;
    j++;
  }
  console.log(scale)
  displayScale(scale)
})


let svgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgInit(svgContainer)
displayFretboard()
// displayDots(gString.current, frets.current)
let stringSet = tune() // should become an event





var truth = document.getElementById("truthBtn")
truth.addEventListener('click', function() {
  let question = 0
  if (!question)
    console.log("Ask if you want to know")
  else
    console.log();
})