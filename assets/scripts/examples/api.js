'use strict'
// development: 'https://tic-tac-toe-wdi.herokuapp.com/',
// production: 'https://tic-tac-toe-wdi-production.herokuapp.com'

const config = require('../config')
const store = require('../store')

const createExample = formData => {
  return $.ajax({
    url: config.apiUrl + '/examples',
    data: formData,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createExample
}
