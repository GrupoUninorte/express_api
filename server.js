const express = require('express')
const app = express()
const user = require('./rutas/user')
const db = require('./config/db')
const port = 3001

app.use(
    express.json({
        limit: '20mb'
    })
)

app.use(
    express.urlencoded({
        limit: '20mb'
    })
)

app.use(user)

app.listen(port, ()=>{
    console.log('la app esta en linea'); 
})

db()