/**
 * Author:    Maxton Lenox and Izetta Evans
 * Created:   5.9.2022
 * Assignment: Lab 10
 *
 **/

 // sortUserInput - a function that take suser input and sorts the letters of their name
 // Taken from Lab 7
 function sortUserInput () {
   // Pull value 1 from input box
   var username = document.getElementById('user-name1').value;
   // split string to array
   var nameArray = username.split('');
   console.log(nameArray);
   // sort array
   var nameArraySort = nameArray.sort();
   console.log(nameArraySort);
   // join array back to string
   var nameSorted = nameArraySort.join('');
   console.log(nameSorted)

   // Print out results in output div
   document.getElementById("p-output1").innerHTML = nameSorted;

   // Pull value 2 from input box
   var username = document.getElementById('user-name2').value;
   // split string to array
   var nameArray = username.split('');
   console.log(nameArray);
   // sort array
   var nameArraySort = nameArray.sort();
   console.log(nameArraySort);
   // join array back to string
   var nameSorted = nameArraySort.join('');
   console.log(nameSorted)

   // Print out results in output div
   document.getElementById("p-output2").innerHTML = nameSorted;

   // Pull value 3 from input box
   var username = document.getElementById('user-name3').value;
   // split string to array
   var nameArray = username.split('');
   console.log(nameArray);
   // sort array
   var nameArraySort = nameArray.sort();
   console.log(nameArraySort);
   // join array back to string
   var nameSorted = nameArraySort.join('');
   console.log(nameSorted)

   // Print out results in output div
   document.getElementById("p-output3").innerHTML = nameSorted;
 }

// Add on click event listener to my-button to call sortUserInput
const inputEl = document.getElementById("my-button");
inputEl.addEventListener("click", sortUserInput);
