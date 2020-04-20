// Lo importante de Node es su forma de crear modulos para dividir la aplicación y utilizar sus modulos que traen desde la instalacion

// Importar archivos para su uso en este index - usamos la constante para guardar todos los datos que importe.
const math = require('./03-math.js');

// Podemos ver todo lo que contiene este modulo dentro
console.log(math);

/* los modulos son necesarios para dividir la aplicacion en varias secciones.
console.log(math.sum(1,2));
console.log(math.rest(1,2));
console.log(math.mult(1,2));
console.log(math.div(1,2));
*/
