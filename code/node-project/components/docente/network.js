const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.get('/', function(req, res) {
    response.success( req, res, 'Lista de docente de la UPS.', 200 ) 
})
router.post('/', function(req, res) {
    if (req.query.error == 'ok') {
        response.error( req, res, 'Error al ingresar docente.', 500 )        
    } else {
        response.success( req, res, 'Ingreso de docente exitoso.', 201 )        
    }
})


module.exports = router