'use strict'
// require getFormFields, our api functions, and our ui functions
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// an event handler, note the parameter will be your event
const onCreateGame = event => {
  // since we are submitting a form, we prevent the default action of
  // refreshing the page. This wouldn't be needed for a button click, but it is
  // needed since we are submitting a form.
  event.preventDefault()

  // event.target is whatever we are listening to, in this case:
  // the #create-example form

  // call our createExample AJAX request, passing it the data from our form
  api.createGame()

    .then(ui.createGameSuccessful)
    .catch(ui.createGameFailure)
}

let currentPlayer = 'X'
// const cellsClicked = (event) =>{
// console.log('click')
// const $cells = $(event.target)
// currentPlayer = currentPlayer === 'O'? 'O':'X',
// $Cells.css('background-color', text.currentPlayer)
// }

// const onDebute = function (event) {
// event.preventDefault()
// const data = getFormFields(event.target)
// api.debute(data)
// .then(ui.debuteSuccess)
//   .catch(ui.debuteFailure)

// gameState How to play the game
// We have a table of 9 empty cells (boxs)

// const retriever =function() {
const cells = ['', '', '', '', '', '', '', '', '']

// const game = function hasSpace(board) {
// return board.some(row => row.some(item => item === ' '));
const playState = function (event) {
  console.log(event.target.id)
  $(event.target).text(currentPlayer)
}
// }
// let player1 = 'X'
// let player2 = 'o'
// const gameSate = function () {
// "cells": ["","","","","","","","",""]

// "id": 1,
// "cells": ["o","x","o","x","o","x","o","x","o"],
// "over": true,
// "Pl1": {
// "id": 1,
//  },
// "pl2": null
// },
// {
// "id": 2,
// "cells": ["","","","","","","","",""],
// "over": false,
// "pl1": {
// "id": 3,
// },
// "pl2": null
// }

// const joue = function () {
// const randomCell = Math.floor(Math.random() * 10)
// if (gameState.cells[randomCell - 1] === '') {
// gameState.cells[randomCell - 1] = gameState.pl2
// const cellID = '#c' + randomCell
// $(cellID).html(gameState.pl2)
// } else {
// joue()
//  }

const debute = function () {
  $('.cells').each(function () {
    $(this).click(function () {
      if ($(`#pl1`).is('.active')) {
        console.log('Player1 has played')
      } else if ((`#pl2`).is('.active')) {
        console.log('Player 2 has played')
      }
    })
  })
}
// gameState.cells[combo[0]] !== "" && gameState.cells[combo[0]] == gameState.cell[combo[1]] && gameState.cell[combo[1]] == gameState.cell[combo[2]]) }
// id of a player is actived when the player click on any cell.
// $('.cells').click(function() {
//     const activePlayer = $('.active').attr('id')
//
//     // Check if the cell has not already activated
// if (!$(this).is('.cells-filled-1, .cells$(‘#message’).css(‘background-color’, ‘green’)lls-filled-2')) {
//
//       // add correct cell -filled
//    if (activePlayer === 'pl1') {
// $(this).addClass('cells-filled-1')
// } else {
//  $(this).addClass('cells-filled-2')
// }
//
//       // The progress of the gameEventsif (activePlayer === "player1") {
//       if (activePlayer == 'pl1') {
//         $('#pl1').addClass("active")
//       } else {
//         $('#pl2').addClass("active")
//       }
//
//       // condition of winning
//
//       // when a cell is played
//

const win = function () {
  const playedCells = []
  let winner = ''

  if ($(this).is('.cells-filled-1')) {
    playedCells.push('pl1')
  } else if ($(this).is('.cells-filled-2')) {
    playedCells.push('pl2')
  } else {
    playedCells.push('null')
  }

  //  const winCombos = [[0,1, 2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  //  winCombos.find(function (combo) {
  if (playedCells[0] !== 'null' && playedCells[0] === playedCells[1] && playedCells[1] === playedCells[2]) {
    // If game is won, assign correct player ID to winner variable
    winner = playedCells[0]
  } else if (playedCells[0] !== 'null' && playedCells[0] === playedCells[3] && playedCells[3] === playedCells[6]) {
    winner = playedCells[0]
  } else if (playedCells[0] !== 'null' && playedCells[0] === playedCells[4] && playedCells[4] === playedCells[8]) {
    winner = playedCells[0]
  } else if (playedCells[1] !== 'null' && playedCells[1] === playedCells[4] && playedCells[4] === playedCells[7]) {
    winner = playedCells
  } else if (playedCells[3] !== 'null' && playedCells[3] === playedCells[4] && playedCells[4] === playedCells[5]) {
    winner = playedCells[3]
  } else if (playedCells[8] !== 'null' && playedCells[8] === playedCells[5] && playedCells[5] === playedCells[2]) {
    winner = playedCells[8]
  } else if (playedCells[8] !== 'null' && playedCells[8] === playedCells[7] && playedCells[7] === playedCells[6]) {
    winner = playedCells[8]
  } else if (playedCells[2] !== 'null' && playedCells[2] === playedCells[4] && playedCells[4] === playedCells[6]) {
    winner = playedCells[2]
  }

  // If Player 1 is winner
  if (winner === 'pl1') {
    // Display "screen-win-one" finish screen
    $('#finish').addClass('screen-win-one')
    $('#message').html('PLAYER 1 WINS')
    $('#board').hide()
    $('#finish').show()

    // If Player 2 is winner
  } else if (winner === 'pl2') {
    // Display "screen-win-two" finish screen
    $('#finish').addClass('screen-win-two')
    $('.message').html('PLAYER 2 WINS')
    $('#board').hide()
    $('#finish').show()

    // If game has not been won but ther are no "null" values left in playedSquares array, it must be a draw
  } else if (jQuery.inArray('null', playedCells) === -1) {
    // Therefore, display tie game screen
    $('#finish').addClass('screen-win-tie')
    $('.message').html('DRAW')
    $('#board').hide()
    $('#finish').show()
  }
}

// const reset = function () {
// $('.cell').html('')
//   cells = [
//    '', '', '', '', '', '', '', '', ''
//  ]
// }
// $('.cell').click(function (e) {
// $(this).html(gameState.pl1)
// const dataID = (parseInt(e.target.id.charAt(1)))
// gameState.cells[dataID - 1] = $(this).html()
//  joue()
// win()
// (!gameState.cells.includes('')) {
// reset()
// }
// })

// $('#reset').click(function () {
// reset()

module.exports = {
  onCreateGame,
  debute,
  playState,
  // joue,
  win
}
