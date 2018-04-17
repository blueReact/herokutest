;(function () {
  'use strict'

  angular
    .module('agApp')
    .controller('homeController', homeController)

  function homeController () { console.log('hello fomr controller') } 
})()