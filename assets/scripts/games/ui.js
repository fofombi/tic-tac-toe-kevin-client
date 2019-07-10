'use strict'
const store = require('../store')

const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')

  // Clear out our forms
  $('form').trigger('reset')
}

const failureMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')

  // Clear out our forms
  $('form').trigger('reset')
}

const createGameFailure = () => {
  failureMessage('Fail to create an Game')
}
const resetSuccess = responseData => {

}
const createGameSuccessful = responseData => {
  // successMessage('You have create an example successfully')
  successMessage('Start  new Game')
  store.game = responseData.game
  console.log(store.game.id)
}
// could you display the current game
const displayGame = responseData => {
  store.disableClick = true
  store.play = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  responseData.games.forEach(Data => {
    if (Data.id === store.idResume) {
      for (let i = 0; i < 9; i++) {
        $('#box' + i).text(Data.cells[i])
        store.play[i] = Data.cells[i]
        if (Data.cells[i] === '') {
          store.play[i] = i
        }
      }
    }
    $('#board').removeClass('hide')
    $('#myModal').removeClass('block')
    $('#message').text('show successfully')
    $('.box').removeClass('red-background')
  })
}
// could display all games playes
const displayAllGame = responseData => {
  store.tousJeux = responseData.games
  responseData.games.forEach(Data => {
    if (store.id.indexOf(Data.id) === -1) {
      store.id.push(Data.id)
      const htmlContent = `
      <p class="info" data-id="${Data.id}">ID: ${Data.id}
        | Cells: ${Data.cells}
        | Over :${Data.over}
        | Player X: {
          id: ${Data.player_x.id}
          email: ${Data.player_x.email}
        }
        |Player O : ${Data.player_o}</p>
        `
      $('.modal-content').append(htmlContent)
    }
  })
}
const updateSuccessful = data => {
  console.log(data)
}
module.exports = {
  createGameFailure,
  createGameSuccessful,
  displayGame,
  displayAllGame,
  resetSuccess,
  updateSuccessful
}
