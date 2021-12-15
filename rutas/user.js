const express = require('express')
const ruta = express.Router()
const control = require('../controlador/user')
const path = 'update'
const path2 = 'delete'

//obtener datos
ruta.get('/', control.getData)

//insert data
ruta.post('/insert', control.insertData)

//update data
ruta.put(`/${path}/:id`, control.updateData)

//delete data
ruta.delete(`/${path2}/:id`, control.deleteData)

module.exports = ruta

