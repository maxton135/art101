/**
 * Author:    Maxton Lenox and Izetta Evans
 * Created:   5.25.2022
 * Assignment: Lab 15
 *
 **/

$('#activate').click(function(e) {
  e.preventDefault();
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request (from the api docs)
      url: "https://api.chucknorris.io/jokes/random",
      // The data to send (will be converted to a query string)
      data: {
              // here is where any data required by the api
              //   goes (check the api docs)
            },
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
      // What do we do when the api call is successful
      //   all the action goes in here
      success: function(data) {
          // do stuff
          $('#output').html(data.value)
      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) {
          // do stuff
          console.log("Error:", textStatus, errorThrown);
      }
  })
})
