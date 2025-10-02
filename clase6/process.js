// Es un OBJETO DE NODE,  que da info sobre el proceso en curso y controla el proceso en ejecucion. Escucha y emite eventos.
// process.argv: da un array con los siguientes elementos: en la posicion 0 es Node, la posicion 1 es la ruta del archivo que se encuentra. Luego los argumentos adicionales son los que se agreguen.
console.log(process.argv) // da node y lugeo la ruta completa de process.js
// todo lo que se escriba lo tomara como argumento, pues argv es un array:
console.log(process.argv[0]) //ubicacion de node.js
console.log(process.argv[1]) //ruta completa del process.js
// ahora agregamos argumentos personalizados:
const nombre = process.argv[2]
console.log(process.argv[2])// undefined aun no puse ninguno
if(nombre){
    console.log(`Hola soy ${nombre}! bienvenido`)
}else{
    console.log('Ingresa un nombre como argumento')
}

// en la terminal usar node process.js Pepe

// TENER EN CUENTA QUE TODO LO QUE TRAE PROCESS ES UN STRING
