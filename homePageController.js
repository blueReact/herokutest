const express = require('express')
const app = express()

var homePageController = function(req, res){
    res.send('Hello World! ss')
};

module.exports = homePageController