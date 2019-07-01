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
  failureMessage('You failed to create an Game')
}

const createGameSuccessful = responseData => {
  // successMessage('You have create an example successfully')
  successMessage('start your new Game')
  store.game = responseData.game
}

module.exports = {
  createGameFailure,
  createGameSuccessful
}
