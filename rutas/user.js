const express = require('express')
const ruta = express.Router()
const control = require('../controlador/user')
const path = 'update'

//obtener datos
ruta.get('/', control.getData)


//insert data
ruta.post('/insert', control.insertData)

//update data
ruta.put(`/${path}/:id`, control.updateData)

module.exports = ruta

