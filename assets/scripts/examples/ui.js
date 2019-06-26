'use strict'

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

const createExampleFailure = () => {
  failureMessage('You failed to create an Example')
}

const createExampleSuccessful = responseData => {
  // successMessage('You have create an example successfully')
  successMessage(`Created: ${responseData.example.text}`)
}

module.exports = {
  createExampleSuccessful,
  createExampleFailure
}
