/**
 * Author:    Maxton Lenox and Izetta Evans
 * Created:   4.25.2022
 * Assignment: Lab 6
 *
 **/

// Define Variables
myTransport = ["bus", "car", "bicycle", "friend's car", "scooter"];

myMainRide = {
  make : "Toyota",
  model : "Camery",
  color : "Red",
  year : 2006,
  age : function() {
    return 2022 - year
  }
}

// output
document.writeln("Ways I get around " + myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
