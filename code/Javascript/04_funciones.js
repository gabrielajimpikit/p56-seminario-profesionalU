var nombreApellido = 'Gabriela Jimpikit'
var edad = 37

// Función tipo declarativa
function imprimirEdad(nombre, edad) {
    console.log( `${nombre} tiene la edad de ${edad}.` )
}

// Función tipo flecha
var imprimirEdad2 = (nombre, edad) => { 
    console.log( `${nombre} tiene la edad de ${edad}.` ) 
}

// Función tipo expresiva
var imprimirEdad3 = function(nombre, edad) {
    console.log( `${nombre} tiene la edad de ${edad}.` ) 
}

imprimirEdad( nombreApellido, edad )
imprimirEdad( 'Brijida Jimpikit', 1 )
imprimirEdad2( nombreApellido, edad )
imprimirEdad3( 'Yaira Jimpikit', 4 )