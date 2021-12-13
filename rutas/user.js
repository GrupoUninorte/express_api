const express = require('express')
const ruta = express.Router()
const control = require('../controlador/user')

ruta.get('/', control.getData)

module.exports = ruta

