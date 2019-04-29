const mongoose = require('mongoose')
const Joi = require('joi');
const express = require('express');
const app = express();
const morgan = require('morgan')
const helmet = require('helmet')
const config = require('config')
const genres = require('./routes/genres')

mongoose.connect('mongodb://localhost/vidly')

app.use(express.json());
app.use('/api/genres', genres)
app.use('/', (req, res) => {
    res.send("Welcome")
})

console.log(`Application: ${config.get('name')}`)
console.log(`Mail Server: ${config.get('mail.host')}`)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));