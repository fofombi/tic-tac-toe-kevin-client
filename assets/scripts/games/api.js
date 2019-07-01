'use strict'
// development: 'https://tic-tac-toe-wdi.herokuapp.com/',
// production:'https://tic-tac-toe-wdi-production.herokuapp.com'

const config = require('../config')
const store = require('../store')

const createGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    data: {},
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame

}
