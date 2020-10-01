/*/const db = require('mongoose')
const schema = mongoose.Schema
const controller = require('./controller')

const mySchema = new schema({
    nombre: {
        type: String,
        required: true,
    },
    abreviatura: {
        type: String,
        required: true,
    },
    descripcion: String,
})

const model = mongoose.model( 'Carrera', mySchema )
module.exports = model*/