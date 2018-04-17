const express = require('express')
const path = require('path')

// set up express app
const app = express()

//  const routes = require('./routes/api');

//  middlwares
//  app.use('/api/ninjas', routes)

app.use(express.static(path.join(__dirname, 'public')))

// listen for requests
app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))