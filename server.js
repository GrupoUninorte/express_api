const express = require('express')
const app = express()
const user = require('./rutas/user')
const port = 3001

app.use(user)

app.listen(port, ()=>{
    console.log('la app esta en linea'); 
})