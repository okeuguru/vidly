const Joi = require('joi');
const express = require('express');
const app = express();
const morgan = require('morgan')
const helmet = require('helmet')
const config = require('config')
require('./courses')

app.use(express.json());
app.use('/api/courses', courses)

console.log(`Application: ${config.get('name')}`)
console.log(`Mail Server: ${config.get('mail.host')}`)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));