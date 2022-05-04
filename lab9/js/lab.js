/**
 * Author:    Maxton Lenox and Izetta Evans
 * Created:   5.4.2022
 * Assignment: Lab 9
 *
 **/

// Assign output div
var outputEl = document.getElementById("output");

// Create new p element
var new1El = document.createElement("p");

// Change inner text
new1El.innerText = "heeeee heeeee haaaaa haaaa";

// Create another p element
var new2El = document.createElement("p");

// Create text node
new2El.innerText = "heeeee hawwww holllla back giiiirl";

// Append p elements to output div
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);


// Task X experiemnt

// Click on the screen to show a hidden message
document.addEventListener("click", showHidden);

function showHidden() {
  document.getElementById("output2").innerHTML = "You have found the hidden message!!!!<br>Soooooo cooool<br>Mind blowing *explosion*";
}

// Hover over the purple box to insert text
function mouseOver(event) {
  const ev = document.createEvent("MouseEvent");
  ev.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  document.getElementById("output3").dispatchEvent(ev);
}
