const mongoose = require('mongoose')

const esquema_user = new mongoose.Schema(
    {
        nombre: {
            type: String
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        edad: {
            type: Number
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('user',esquema_user,'usuario')