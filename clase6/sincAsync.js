//Sincronia y Asincronia
//Funcionas sincronas, se respeta el orden, hasta que no se termina se bloquea las siguientes
function a() {
  console.log("1");
  b();
}
function b() {
  console.log("2");
  c();
}
function c() {
  console.log("3");
}
a();
//Asincronia, las tareas se realizan en segundo plano y no se bloquean, sigue la siguiente aun si no termino la anterior
//Usamos los timer que emulan conexiones externas
setTimeout(() => {
  // va una funcion y luego el tiempo
  console.log("Primera");
}, 1000);
console.log("Segunda"); // Segunda y luego Primera

//CALL BACK: es una funcion que se pasa como parametro a otra funcion
function mostrarResultado(dato) {
  console.log("El resultado es: " + dato);
}
function suma(n1, n2, cb) {
  let resultado = n1 + n2;
  cb(resultado);
}
suma(10, 20, mostrarResultado); // el cb es mostrarResultado
//********idem con una funcion flecha
const resultado1 = (dato) => {
  console.log("El resultado es: ", dato);
};
const sumita = (n1, n2, cb) => {
  let sumando = n1 + n2;
  if(n1 < 0 || n2 < 0){
    console.log('no se pudo realizar la suma')
  } else {
cb(sumando);
  }
  
  return;
};
sumita(20, -30, resultado1);

const promesa = new Promise((resolve, reject) => {
  let estado = false;
  if (estado) {
    resolve("Se cumplio la Promesa!!");
  } else {
    reject("Uff no se cumplio la promesa");
  }
})
console.log(promesa)

// Ahora usamos  METODOS then y catch, para manejar el resultado de las promesas, y van concatenados uno tras otro
// Then recibe una funcion cuando la funcion se ejecuta exitosamente
// Catch reciben una funcion cuando la funcion no se ejecuta y le pasamos el error
promesa
       .then(() => console.log('se resuelve la promesa en el then '))
       .catch(() => console.log('no se resolvio la promesa' ))
       .finally(() => console.log('se termino el metodo') )

const productos1 = [
    {id: 1, name: 'naranja', price: 500},
    {id: 2, name: 'apple', price: 300},
    {id: 3, name: 'grape', price: 200}
]
function buscarProductoById(id) {
    return new Promise ((resolve, reject) =>{
setTimeout (() => {
    const productobyId = productos1.find(producto => producto.id === id)
if(productobyId){
    resolve(productobyId)
} else {
    reject('No existe el id ')
}
}, 2000)

    })
}
buscarProductoById(3)
.then((producto) => console.log(producto))
.catch((error) => console.log(error))
.finally(() => console.log ('Termino el proceso'))

buscarProductoById(4)
.then((producto) => console.log(producto))
.catch((error) => console.log(error))
.finally(() => console.log ('Termino el proceso'))

//Otro ejemplo
  const nuevaPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const numero = Math.random()*10;  
    console.log("Número generado:", numero);

    if (numero < 5) {
      resolve("Tarea completada con éxito");
    } else {
      reject("Tarea no se realizó");
    }
  }, 1000);
});

nuevaPromesa
  .then((resultado) => {
    console.log("Éxito:", resultado);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Se terminó el proceso");
  });