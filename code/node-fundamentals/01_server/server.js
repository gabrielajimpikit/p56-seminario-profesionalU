const express = require('express')
const bodyParser = require('body-parser')
//const { error } = require('../../node-project/network/response')
const response = require('./network/response')

const router = express.Router()

var app = express()
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( {extended:false} ) ) 
app.use( router )

router.get('/carrera', function(req, res) {
  response.success(req, res, 'Lista de la carrera de la UPS', 200)
    //console.log(req.query)
//response.success( req, res, 'Lista de Carreras de la UPS.', 200 ) 
})


router.post('/carrera', function(req, res) {
    //console.log(req.body)
    //console.log(req.query)
    if(req.query.error == 'ok'){

      response.error(req, res, 'Error al ingresar la carrera', 200)
    }else{
      response.success(req, res, 'Ingreso de carrera exitoso', 201)
    }
    
})
app.use('/', express.static('public'))
app.listen( 1025 )
console.log( 'La aplicación está escuchando en http://localhost:1025' )