'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateExample = event => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.createExample(formData)
    .then(ui.changePasswordSuccessful)
    .catch(ui.changePasswordFailure)
}

module.exports = {
  onCreateExample
}