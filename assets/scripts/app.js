'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const gameEvents = require('./games/events')
<<<<<<< HEAD

=======
>>>>>>> development
$(() => {
  // your JS code goes here
  // startScreenUi()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-game').on('click', gameEvents.onCreateGame)
<<<<<<< HEAD
  $('#onDebute').on('click', gameEvents.debute)
  $('.cell').on('click', gameEvents.playState)
  $('.cell').on('click', gameEvents.cells)
  $('.cell').on('click', gameEvents.onCellClick)
  $('#reset').on('click', gameEvents.joue)
=======
  $('#update').on('click', gameEvents.onUpdateGame)
  $('.cell').on('click', gameEvents.cellClicked)
>>>>>>> development
})

// Append start and finish screens to the body and immediately hide
// $('body').append(`<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><a href="#" class="button">Start game</a></header></div>`)
// $('body').append(`<div class="screen screen-win" id="finish"> <header><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button">New game</a></header></div>`)
// $('#start, finish').hide()
// // First show the start screen on page load
// const startScreenUi = function () {
//   $('#start').show()
//   $('#start, #finish').hide()
//   // When start/new game button is clicked...
//   $('.button').on('click', function () {
//     $('.cells').each(function () {
//       // Hide start/new game screen and show the game board
//       $('#start').hide()
//       $('#finish').hide()
//       $('#board').show()
//       // Remove active classes from previous game
//       $('li.players').removeClass('active')
//       // Randomly assign first go to a player
//       $('.players').eq(Math.floor(Math.random() * 10)).addClass('active')
//       // Call startGame function to start the game
//       gameEvents.debute()
//     })
//   })
// }
