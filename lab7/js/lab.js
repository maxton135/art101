/**
 * Author:    Maxton Lenox and Izetta Evans
 * Created:   4.27.2022
 * Assignment: Lab 7
 *
 **/

// sortUserInput - a function that take suser input and sorts the letters of their name
function sortUserInput () {
  // ask user input
  var username = window.prompt("What is your name?");
  console.log(username);
  // split string to array
  var nameArray = username.split('');
  console.log(nameArray);
  // sort array
  var nameArraySort = nameArray.sort();
  console.log(nameArraySort);
  // join array back to string
  var nameSorted = nameArraySort.join('');
  console.log(nameSorted)
  return nameSorted;
}

//Output
document.writeln("oh hey, I've fixed your name: ",
  sortUserInput(), "</br>");
