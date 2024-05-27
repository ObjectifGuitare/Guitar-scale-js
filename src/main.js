var neckColor = "#F7CA9D"
var fretColor = "#B69A79"
var neckdotColor = "#1B130A"


// init svg container
let svgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgContainer.setAttribute("width", "200");
svgContainer.setAttribute("height", "300");

document.querySelector('body').appendChild(svgContainer);


let columnWidth = 180;
let rowHeight = 40;



svgContainer.appendChild(circle);