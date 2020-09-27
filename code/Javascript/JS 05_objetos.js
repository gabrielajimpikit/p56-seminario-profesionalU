var docente1 = {
    nombre: 'Gabriela ',
    apellido: 'Jimpikit',
    afiliacion: 'Universidad Politécnica Salesiana',
    correo_electronico: 'ljimpikitc@ups.edu.ec',
}

var docente2 = {
    nombre: 'Yaira',
    apellido: 'Jimpikit',
    afiliacion: 'Universidad Politécnica Salesiana',
    correo_electronico: 'yjimpikitc@ups.edu.ec',
}

function imprimirNombreMayuscula(objeto) {
    var { nombre } = objeto
    console.log( `${nombre.toUpperCase()} ${objeto.apellido}` )
}

function imprimirNombreMinuscula(objeto) {
    console.log( `${objeto.nombre.toLowerCase()} ${objeto.apellido}` )
}

function imprimirApellidoMayuscula( { apellido } ) {
    console.log( `${apellido.toUpperCase()}` )
}


imprimirNombreMayuscula( docente1 )
imprimirNombreMinuscula( docente1 )
imprimirApellidoMayuscula( docente2 )