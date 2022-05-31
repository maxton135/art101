/**
 * Author:    Maxton Lenox and Izetta Evans
 * Created:   5.30.2022
 * Assignment: Lab 16
 *
 **/


// Comic numebr variable
var comicNum = 100;

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/100/info.0.json",
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json"
}).done(function(data) {
  console.log("worked");
  $('#comicTitle').html(data.title);
  $('#comicImg').attr("src", data.img);
  $('#comicImg').attr("alt", data.alt);
})

// When next comic button is pressed
$('#next').click(function(e) {
  comicNum++;
  var comicURL = "https://xkcd.com/" + comicNum + "/info.0.json";
  console.log(comicURL);
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request (from the api docs)
      url: comicURL,
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json"
  }).done(function(data) {
    console.log("worked");
    $('#comicTitle').html(data.title);
    $('#comicImg').attr("src", data.img);
    $('#comicImg').attr("alt", data.alt);
  })
})

// When previous comic button is pressed
$('#previous').click(function(e) {
  comicNum--;
  var comicURL = "https://xkcd.com/" + comicNum + "/info.0.json";
  console.log(comicURL);
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request (from the api docs)
      url: comicURL,
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json"
  }).done(function(data) {
    console.log("worked");
    $('#comicTitle').html(data.title);
    $('#comicImg').attr("src", data.img);
    $('#comicImg').attr("alt", data.alt);
  })
})
