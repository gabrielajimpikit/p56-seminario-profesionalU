const express = require('express')
const bodyParser = require('body-parser')
const response = require('./network/response')

const router = require('./network/routes')

var app = express()
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( {extended:false} ) )
app.use( router)
router.get('/carrera', function(req, res) {
    response.success(req, res, 'Lista de Carreras de la UPS.', 200 ) 

})
router.post('/carrera', function(req, res) {
    if (req.query.error == 'ok') {
        response.error(req, res, 'Error al ingresar la carrera', 500 )       
    } else {
        response.success( req, res, 'Ingreso de Carrera exitoso.', 201 )        
    }
        
})

app.use( '/', express.static('public') )

app.listen( 1025 )
console.log( 'La aplicación está escuchando en http://localhost:1025' )
//router( app )


//app.use( '/', express.static('public') )

//app.listen( 1025 )
//console.log( 'La aplicacion esta escuchando en http://localhost:1205' ) 