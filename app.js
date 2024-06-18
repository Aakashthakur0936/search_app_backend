const express = require('express');
const cors = require('cors');


const app =express();

app.use(express.json())

app.use(cors())

//routes

const testRoute = require('./routes/routes')

app.use('/mern/search/app', testRoute)


module.exports = app