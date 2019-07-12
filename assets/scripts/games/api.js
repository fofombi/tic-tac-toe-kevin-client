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

<<<<<<< HEAD
module.exports = {
  createGame
=======
// create game for a user

// reset or update of my game.
const resetGame = (id, player, over) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: id,
          value: player
        },
        over: over
      }
    }
  })
}
const jeux = id => {
  return $.ajax({
    url: config.apiUrl + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const tousJeux = () => {
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateGame = (index, value) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': store.game.over
      }
    }
  })
}
module.exports = {
  createGame,
  resetGame,
  jeux,
  tousJeux,
  updateGame
>>>>>>> development

}
