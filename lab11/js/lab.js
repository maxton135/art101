/**
 * Author:    Maxton Lenox and Izetta Evans
 * Created:   5.11.2022
 * Assignment: Lab 11
 *
 **/

$('#challengediv').append(
  $(document.createElement('button')).prop({
    id: 'challengebutton',
    type: 'button',
    innerHTML: 'Press me',
  })
)

$('#problemsdiv').append(
  $(document.createElement('button')).prop({
    id: 'problemsbutton',
    type: 'button',
    innerHTML: 'Press me',
  })
)

$('#resultsdiv').append(
  $(document.createElement('button')).prop({
    id: 'resultsbutton',
    type: 'button',
    innerHTML: 'Press me',
  })
)


// Add jQuery Event listener for each button
$('#challengebutton').click(function() {
  $('#challengediv').toggleClass('special sections');
})

$('#problemsbutton').click(function() {
  $('#problemsdiv').toggleClass('special sections');
})

$('#resultsbutton').click(function() {
  $('#resultsdiv').toggleClass('special sections');
})


// Task X Bonus
// Create two buttons in results results div
$('#resultsdiv').append(
  $(document.createElement('button')).prop({
    id: 'bonusbutton1',
    type: 'button',
    innerHTML: 'Change Other Button Color',
  })
)
$('#resultsdiv').append(
  $(document.createElement('button')).prop({
    id: 'bonusbutton2',
    type: 'button',
    innerHTML: 'Change Other Button Color',
  })
)

// Add jQuery Event listener to change color of other button
$('#bonusbutton1').click(function() {
  $('#bonusbutton2').toggleClass('special-button');
})

$('#bonusbutton2').click(function() {
  $('#bonusbutton1').toggleClass('special-button');
})
