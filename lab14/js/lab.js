/**
 * Author:    Maxton Lenox and Izetta Evans
 * Created:   5.18.2022
 * Assignment: Lab 13
 *
 **/

// main function
function fizzBuzzBoom(max, mult3, mult5, mult7) {
  var outputStr = "";
  for (var i = 1; i <= max; i++) {
    var str = "";
    var boo = false;
    str += i + ":";
    if (i % 3 == 0) {
      str += mult3;
      boo = true;
    }
    if (i % 5 == 0) {
      str += mult5;
      boo = true;
    }
    if (i % 7 == 0) {
      str += mult7;
      boo = true;
    }
    if (boo) {
      str += "!";
    }
    outputStr += str + "<br>";
  }
  $("#output").html(outputStr);
}

// Event listener for RUN button that calls function above
$('#btn').click(function() {
  const maxnum = $("#maxNum").val();
  const mult3 = $("#mult3").val();
  const mult5 = $("#mult5").val();
  const mult7 = $("#mult7").val();
  fizzBuzzBoom(maxnum, mult3, mult5, mult7);
})
