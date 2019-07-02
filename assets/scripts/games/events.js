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
//  allow player 1 or player 2 to click on a cell
const cellClicked = (event) => {
  console.log('click')
  const $cells = $(event.target)
  currentPlayer = currentPlayer === '○' ? '✕' : '○'
  $cells[event.target.id].css('background', 'transparent').text(currentPlayer)
}

// We have a table of 9 empty cells (boxs)-

// const retriever =function() {
let currentPlayer = 'x'
// the board container has 9 cells (squares)
const cells = ['', '', '', '', '', '', '', '', '']
// check if cells is empty
// if (cells[event.target.id] !== '') {
//   console.log('cell no available')
// } else {
// $(event.target).text(currentPlayer)
// cells[event.target.id] = currentPlayer
// }
// check if there is not winner or the game is not tie.
// if (cells[event.taget.id] !== [0,1, 2] || [3,4,5] || [6,7,8] || [0,3,6] || [1,4,7] || [2,5,8] || [0,4,8] || [2,4,6] &&  cells = ["o","x","o","x","o","x","o","x","o"]){
// $(event.target.id).text(secondPlayer)
// } else {
// $(event.target).text(currentPlayer)
// cells[event.target.id]= currentPlayer

// }

// const game = function hasSpace(board) {
// return board.some(row => row.some(item => item === ' '));
const playState = function (event) {
  console.log(event.target.id)
  $(event.target).text(currentPlayer)
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
}

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

  //   winCombos = [[0,1, 2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
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

//

module.exports = {
  onCreateGame,
  debute,
  playState,
  cells,
  // joue,
  win,
  cellClicked
}
