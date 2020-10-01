const express = require('express')
const bodyParser = require('body-parser')
const { error } = require('../../node-project/network/response')
//const response = require('./network/response')

const router = express.Router()

var app = express()
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( {extended:false} ) ) 
app.use( router )

router.get('/carrera', function(req, res) {
   // console.log(req.body)
    //console.log(req.query)
    res.send('Lista de carreras de la ups')    
//response.success( req, res, 'Lista de Carreras de la UPS.', 200 ) 
})

//app.use('/', express.static('public'))

router.post('/carrera', function(req, res) {
    console.log(req.body)
    console.log(req.query)

    res.status(201).send( { tipo_error:0, mensaje_error:'', mensaje_exito: "Añadiso exitosamente" })
   
       
    
})
app.listen( 1025 )
console.log( 'La aplicación está escuchando en http://localhost:1025' )