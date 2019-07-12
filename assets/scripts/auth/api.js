'use strict'

const config = require('../config')
const store = require('../store')

const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    data: formData,
    method: 'POST'
  })
}

const signIn = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    data: formData,
    method: 'POST'
  })
}

const changePassword = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    data: data,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// signOut
const signOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateGame = function (id) {
  return $.ajax({
    url: config.apiUrl + '/game/' + id,
    method: 'PATCH'
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
<<<<<<< HEAD
  updateGame
=======
  changePassword
>>>>>>> development
}
