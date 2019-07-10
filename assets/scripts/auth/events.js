'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(console.log)
    .catch(console.error)
    .then(ui.signUpSuccessful)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  console.log('You have changed your Password')

  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
// Sign out
const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccessful)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
