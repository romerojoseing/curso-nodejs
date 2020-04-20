// Como crear un objeto para asignarle multiples propiedades, que estas pueden ser funciones
const Math = {};

// Funciones matemáticas a exportar
function sum(x1, x2){
    return x1 + x2;
}

function rest(x1, x2){
    return x1 - x2;
}

function mult(x1, x2){
    return x1 * x2;
}

function div(x1, x2){
    if(x2 == 0){
        console.log("Nose puede dividir");
    }
    else{
        return x1 / x2;
    }
}

/* Exportar para poder ser usados en otro archivo - ESTO EXPORTA SOLO UNA PROPIEDAD DEL OBJETO
exports.sum = sum;
exports.rest = rest;
exports.mult = mult;
exports.div = div;*/

// Agregamos las propiedades a ese objeto para exportarlas
Math.sum = sum;
Math.rest = rest;
Math.mult = mult;
Math.div = div;

// ESTO EXPORTA OBJETOS, FUNCIONES, VARIABLES Y CUALQUIER DATO DE JS
module.exports = Math;       

/* Podemos exportar tambien una funcion
function hello(name){
    console.log("hello ", name);
}
module.exports = hello;*/