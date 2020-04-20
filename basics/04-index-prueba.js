/* Importamos el modulo que ya trae Node.js para usarlo
por lo general al requerir un modulo lo almacenamos en una variable del mismo nombre*/

const os = require('os');           // Este modulo nos permite trabajar con el Sistema Operativo

console.log(os.platform());         // Nos muestra la plataforma en la cual estamos trabajando
console.log(os.release());          // Nos muestra en que version del sistema operativo estamos
console.log(os.freemem());          // Nos muestra la memoria libre del equipo
console.log(os.totalmem());         // Nos muestra la memoria total

const fs = require('fs');           // Este modulo nos permite trabajar con los archivos del sistema operativo

/* esto es un ejemplo de codigo asincrono es donde le estamos dando las instrucciones de crear un archivo
pero esto ya no es problema de node sino del OS en crear el archivo asi que pasa a seguir ejecutando el codigo
en este caso se imprime por consola primero el ultimo mensaje y luego el de la funcion*/

fs.writeFile('./text.txt', 'lorem ipsum', (err) => {    // Funcion para crear un archivo
    if(err){
        console.log(err);
    }else{
        console.log("archivo creado");
    }
});

console.log("ultima linea de codigo");

/* OJO
   Codigo Bloqueo - agregar funciones o metodos a una const esto bloquearia el proceso hasta que todo se ejecute y luego seguiria con el codigo
const user = query('SELECT * FROM Users');*/

// Codigo Asincrono - Deja fluir el proceso mientras se esta ejecutando lo demas del codigo
query('SELECT * FROM Users', (err, users) => {
    if(err){
        return err;
    }
    if(users){
        console.log("listo");
    }
});


fs.readFile('./text.txt', (err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());   // Leer los datos y convertir a string
});