'use strict'
// require getFormFields, our api functions, and our ui functions
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// an event handler, note the parameter will be your event

// const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store.js')
store.play = [1, 2, 3, 4, 5, 6, 7, 8, 9]
store['currentPlayer'] = 'O'
store.click = false
$('#update').hide()
// an event handler, note the parameter Owill be your event
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
=======
  // event.target is whatever we are listening to, in this case:
  // the #create-example form
  // call our createExample AJAX request, passing it the data from our form

  $('.cell').text('')
  store['currentPlayer'] = ''
  store.click = false
  store.play = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  store.full = false
  store.winner = null
  api.createGame()
    .then(ui.createGameSuccessful)
    .catch(console.log)
}
//  allow player 1 or player 2 to click on a cell
const cellClicked = (event) => {
  const $cells = $(event.target)
  // check if the cells is empty then we will draw x or O into the cells
  if (store.click === true) {
    $('#message').text('You cannot click')
  }
  if (!($cells.text() !== 'o' && $cells.text() !== 'x')) {
    $('#message').text('click another place')
  }
  if ($cells.text() !== 'o' && $cells.text() !== 'x' && store.click !== true) {
    store.currentPlayer = store.currentPlayer === 'x' ? 'o' : 'x'
    $(event.target).css('text-align', 'center')
    store.play[event.target.id] = store.currentPlayer
    console.log(`${event.target.id} and play ${store.play}`)
    store.previousPlayer = store.currentPlayer === 'x' ? 'o' : 'x'

    $(event.target).css('text-align', 'center')
    const message = store.previousPlayer + ' is next turn'

    $('#message').text(message)
    console.log(store.currentPlayer + ' ' + store.previousPlayer)
    $cells.css('background', 'tcheckEmptyransparent').text(store.currentPlayer)
    store.full = checkEmpty()

    win()
    api.updateGame(event.target.id, store.previousPlayer)
      .then(ui.updateSuccessful)
  }

}

// We have a table of 9 empty cells (boxs)-

// const retriever =function() {
// the board container has 9 cells (squares)
const cells = ['', '', '', '', '', '', '', '', '']

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
// check for winning

const win = function () {
  // winCombos = [[0,1, 2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  //  winCombos.find(function (combo) {
  if (store.play[0] !== 'null' && store.play[0] === store.play[1] && store.play[1] === store.play[2]) {
    store.winner = store.currentPlayer
    alert()
    // If game is won, assign correct player ID to winner variable
  } else if (store.play[0] === store.play[3] && store.play[3] === store.play[6]) {
    store.winner = store.currentPlayer
    alert()
  } else if (store.play[0] !== 'null' && store.play[0] === store.play[4] && store.play[4] === store.play[8]) {
    store.winner = store.currentPlayer
    alert()
  } else if (store.play[1] !== 'null' && store.play[1] === store.play[4] && store.play[4] === store.play[7]) {
    store.winner = store.currentPlayer
    alert()
  } else if (store.play[3] !== 'null' && store.play[3] === store.play[4] && store.play[4] === store.play[5]) {
    store.winner = store.currentPlayer
    alert()
  } else if (store.play[8] !== 'null' && store.play[8] === store.play[5] && store.play[5] === store.play[2]) {
    store.winner = store.currentPlayer
    alert()
  } else if (store.play[8] !== 'null' && store.play[8] === store.play[7] && store.play[7] === store.play[6]) {
    store.winner = store.currentPlayer
    alert()
  } else if (store.play[2] !== 'null' && store.play[2] === store.play[4] && store.play[4] === store.play[6]) {
    store.winner = store.currentPlayer
    alert()
  } else if (checkEmpty()) {
    alert()
  }
}

const onDisplayPastGame = event => {
  event.preventDefault()
  $('#myModal').addClass('block')
  api.getAllGame()
    .then(ui.displayAllGame)
}

const onFerme = event => {
  event.preventDefault()
  $('#myModal').removeClass('block')
}
// ---------To display past game ------
const onInformation = event => {
  const target = $(event.target)
  const id = target.data('id')
  store.idResume = id
  console.log(store.idResume)
  api.getAllGame()
    .then(ui.displayGame)
}
// If Player 1 is winner
const alert = function () {
  if (store.winner === 'x') {
    // Display "screen-win-one" finish screen
    $('#finish').addClass('screen-win-one')
    $('#message').text('x win')
    $('#finish').show()
    store.click = true

    // If Player 2 is winner
  } else if (store.winner === 'o') {
    // Display "screen-win-two" finish screen
    $('#finish').addClass('screen-win-two')
    $('#message').html('O  WINS')
    $('#finish').show()
    store.click = true
    // If game has not been won but ther are no "null" values left in playedSquares array, it must be a draw
  } else if (store.full) {
    // Therefore, display tie game screen
    $('#finish').addClass('screen-win-tie')
    $('#message').html('DRAW')
    $('#finish').show()

    store.click = true
  }
}
const onUpdateGame = event => {
  event.preventDefault()
  //  const boardnow = store.game
  const index = event.target.id
  const value = $(event.target).text()
  api.updateGame(index, value)
    .then(console.log)
    .catch()
}
// check empty cell if it's empty accept click
const checkEmpty = function () {
  console.log(' You have Played')
  return store.play.every(p => {
    return (typeof p !== 'number')
  })
}

module.exports = {
  onCreateGame,
  debute,
  cells,
  onUpdateGame,
  onFerme,
  onInformation,
  onDisplayPastGame,
  alert,
  win,
  cellClicked
}
