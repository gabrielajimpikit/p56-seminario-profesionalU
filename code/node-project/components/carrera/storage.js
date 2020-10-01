const db = require( 'mongoose')
const model = require('./model')
const uri = "mongodb+srv://ups1:gaby2020@cluster0.kpcij.gcp.mongodb.net/utups?retryWrites=true&w=majority";

db.Promise=global.Promise
db.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'utups',
})
.then((data) => { console.log('[db] - Conectado con exito.')})
.catch((error)=>{ console.error( '[error log] - '+ error)})


const list = []

function addCarrera( objeto ) {
    const carrera = new model( objeto )
    carrera.save()
}

async function getCarreras( filtroCarrera ) {
    let filtro = {}
    if (filtroCarrera != null) {
        filtro = { nombre : filtroCarrera }
    }
    const carreraList = await model.find( filtro )
    return carreraList
}

async function updateCarrera( idCarrera, objeto ) {
    const foundCarrera = await model.findOne({ _id: idCarrera })

    foundCarrera.nombre = objeto.nombre
    foundCarrera.abreviatura = objeto.abreviatura
    foundCarrera.descripcion = objeto.descripcion

    const result = await foundCarrera.save()
    return result
}

function deleteCarrera(idCarrera) {
    return model.deleteOne({ _id: idCarrera })
}

module.exports = {
    add: addCarrera,
    get: getCarreras,
    update: updateCarrera,
    delete: deleteCarrera,
}