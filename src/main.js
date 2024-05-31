import { Scales } from "./scales.js"

var neckColor = "#F7CA9D"
var fretColor = "#B69A79"
var outOfBoard = "white"
var dotColor = "#1B130A"

let columnWidth = 40;
let rowHeight = 40;
let strokeWidth = 2;

let sharpSet = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
let flatSet = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
let tuning = ['E', 'B', 'G', 'D', 'A', 'E'];

const frets = {};
frets.number = 13;
frets.first = 0;

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

function displayFretboard() {
  for (let i = 0; i < gString.number; i++) {
    for (let j = 0; j < frets.number; j++) {
      // Create a rectangle for the row background
      let rowRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rowRect.setAttribute("x", j * columnWidth);
      rowRect.setAttribute("y", i * rowHeight);
      rowRect.setAttribute("width", columnWidth);
      rowRect.setAttribute("height", rowHeight);
      if(j == 0 && frets.first == 0) //fret 0
      {
        rowRect.setAttribute("fill", outOfBoard);
        rowRect.setAttribute("stroke", "white");
      }
      else if (i == gString.number - 1)
      {
        rowRect.setAttribute("fill", "white");
        rowRect.setAttribute("stroke", "white"); 
        let fretText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        fretText.setAttribute("x", j * columnWidth + columnWidth / 2); // Center the text under the fret
        fretText.setAttribute("y", (i * rowHeight) + rowHeight); // Position the text just below the fret
        // fretText.setAttribute("font-family", "Verdana");
        fretText.setAttribute("font-size", "10");
        fretText.setAttribute("text-anchor", "middle"); // Center the text
        fretText.textContent = j + frets.first; // The fret number is the same as the j variable
        svgContainer.appendChild(fretText);
      }
      else // all visible frets on the fretboard
      {
        rowRect.setAttribute("fill", neckColor);
        rowRect.setAttribute("stroke", fretColor); // Add a colored stroke
      }
      rowRect.setAttribute("stroke-width", strokeWidth); // Set the stroke width
      svgContainer.appendChild(rowRect);
      if (i == gString.number - 1)
      { 
        let fretText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        fretText.setAttribute("x", j * columnWidth + columnWidth / 2); // Center the text under the fret
        fretText.setAttribute("y", (i * rowHeight) + rowHeight); // Position the text just below the fret
        fretText.setAttribute("font-family", "Verdana");
        fretText.setAttribute("font-size", "10");
        fretText.setAttribute("text-anchor", "middle"); // Center the text
        fretText.textContent = j + frets.first; // The fret number is the same as the j variable
        svgContainer.appendChild(fretText);
      }
  }
  svgContainer.setAttribute("width", "550");
  svgContainer.setAttribute("height", "550");
}}


function displayDots(string, fret)
{
  // console.log("bonjour")
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
      console.log(stringSet[string]);
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
  while(svgContainer.lastChild)
    svgContainer.removeChild(svgContainer.lastChild)
  displayFretboard();
  for (let string = 0; string < gString.number; string++)
  {
    for (let fret = frets.first; fret < frets.number + frets.first; fret++)
    {
      
      if (scale.includes(stringSet[string][fret]))
        displayDots(string + 1, fret - frets.first + 1)
    }
  }
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

function initScale() {
  
  let noteSet = sharpOrFlat(Key);
  let i = getNoteIndex(noteSet, Key);
  let j = 0;
  let workingScale = Scales.mothers[scaleChoice];
  while(j < workingScale.length) // the selected scale gets created through this loop
  {
    scale[j] = noteSet[i];
    i = (i + workingScale.formula[j]) % 12;
    j++;
  }
  displayScale(scale)
}

var KeySelect = document.getElementById("key-select");
let Key = KeySelect.value;
KeySelect.addEventListener('change', function() {
  Key = this.value;
  initScale();
})

var ScaleSelect = document.getElementById("scale-select");
let scale = [];
let scaleChoice = '0';
ScaleSelect.addEventListener('change', function() {
  scaleChoice = this.value;
  initScale();
});


let svgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgInit(svgContainer)
displayFretboard()
let stringSet = tune() // should become an event




function downloadSVG() {
  const svg = document.getElementById('fretboard').firstChild.outerHTML;
  const blob = new Blob([svg.toString()]);
  const element = document.createElement("a");
  element.download = "w3c.svg";
  element.href = window.URL.createObjectURL(blob);
  element.click();
  element.remove();
  console.log("dled")
}

let DwnldBtn = document.querySelector("#download")
DwnldBtn.addEventListener('click', downloadSVG)


var truth = document.getElementById("truthBtn")
truth.addEventListener('click', function() {
  let question = 1
  if (!question)
    console.log("Ask if you want to know")
  else
    console.log(scaleChoice)
})