

//const { resolve } = require("path");


//CLASE 3:
//funciones anonimas
function nombreFuncion() {
  console.log("estoy en la clase 3");
}
// funciones expresadas
const funcionExpresada = () => {
  console.log("estoy en la clase 3");
};
//funciones flecha
const funcionFlecha = () => {
  console.log("estoy en la clase 3");
};

//DENTRO DE LOS PARENTESIS VAN LOS PARAMETROS Y LA RETORNAR USAMOS AL INVOCAR LOS ARGUMENTOS
let name = "";
function saludar(name) {
  console.log(`Hola ${name}, bienvenido!`);
}
saludar("pepe");

const sumar = (a, b, c) => {
  let resultado = a + b + c;
  console.log(resultado);
};
sumar(1, 2, 3);
sumar(4, 5, 6);

const restar = (n1, n2) => {
  return n1 - n2;
};
console.log(restar(20, 15));

class User {
  constructor(name, age, password, email) {
    (this.name = name),
      (this.age = age),
      (this.password = password),
      (this.email = email);
  }
  login = (inputEmail, inputPassword) => {
    this.email === inputEmail && this.password === inputPassword
      ? console.log("login exitoso")
      : console.log("password o email ingresados erroneos");
  };
}

class Student extends User {
  constructor(name, age, password, email, is_Activity, courses) {
    super(name, email, age, password),
      (this.is_Activity = is_Activity),
      (this.courses = courses);
  }
  saludar = () => {
    console.log(`Bienvenido ${this.name} al curso de ${this.courses[1]}`);
  };
}
// ojo con el orden, tiene que coincidir
// La desestructuración es una expresión de JavaScript que hace posible desempacar valores de un objeto o un array en variables individuales. Podemos aplicarla en objetos y arrays
// En objetos desestructuramos con la llave o clave y utilizamos llaves. Ejemplo:
// const persona = {nombre: 'Juan', edad: 30, profesion: 'Desarrollador'};
// al desestructurar: const {nombre, edad, profesion} = persona;
// console.log(nombre, edad, profesion)
// En arrays desestructuramos con el indice y utilizamos corchetes. Ejemplo:
// const numeros = [1, 2, 3, 4, 5]; ahora desestructuro el array, cambiando si quiero nombres, pero respetando el orden
// const [primero, segundo, tercero, cuarto, quinto] = numeros;
// console.log(primero, segundo, tercero, cuarto, quinto)
//Aclaracion: puedo desestructurar no todas las propiedades o elementos, sino solo los que necesito. Si reasigno algun valor NO SE AFECTA EL OBJETO O ARRAY ORIGINAL




const letras = ["n", "a", "c", "h", "o"];
const palabra = letras.reduce((acum, letra) => acum + letra, "La persona es: ");
console.log(palabra);

// Trim y flat

const cadena = "    hola a todos   ";
console.log(cadena);
const sinEspacios = cadena.trim();
console.log(sinEspacios);

const numeros5 = [1, 2, 3, [4, 5], 6, 7, [89, 88, 87]];
console.log(numeros5);
const aplanada = numeros5.flat();
console.log(aplanada);

 let mensajes = [];
 //let intentoDeMensajes = prompt('ingrese su mensaje')
 if(intentoDeMensajes.trim().length >0){
    mensajes.push(intentoDeMensajes.trim())
    console.log(mensajes)
 } else {
    console.log('no se ha enviado ningunn mensaje')
 }



//Otro ejemplo de clase pero agregando una VARIABLE PRIVADA
class Animal {
  //declaro lo privado con # y solo se puede usar dentro de la clase no en las instancias
  #especie = "";
  constructor(nombre, edad, especie) {
    (this.nombre = nombre), (this.edad = edad), (this.#especie = especie);
  }
  // para llamar a la privada creo un metodo publico
  getEspecie() {
    return this.#especie;
  }
  getSaludar() {
    console.log(
      `Hola soy ${this.nombre}, tengo ${this.edad} años y soy un ${
        this.#especie
      }`
    );
  }
}
const perro = new Animal("Fido", 17, "Perro");
console.log(perro);
perro.getSaludar();
perro.getEspecie();
console.log(perro.getEspecie()); //Perro

//Herencia:
class Descendiente extends Animal {
  constructor(nombre, edad, especie, raza, color) {
    super(nombre, edad, especie), (this.raza = raza), (this.color = color);
  }

  getSaludar() {
    console.log(
      `Hola soy ${this.nombre}, tengo ${this.edad} años,  de raza ${this.raza} y color ${this.color}`
    );
  }
} // las variables privadas no se heredan
const nuevoPerro = new Descendiente(
  "Luna",
  3,
  "Perro",
  "Pastor Aleman",
  "Negro"
);
console.log(nuevoPerro);

//Metodo INCLUDES, devuelve un booleano si existe o no
console.log(letras.includes("n")); //true
console.log(letras.includes("x")); //false

console.log(letras.indexOf("n")); //0
console.log(letras.indexOf("x")); //-1 no existe

//Metodo de objetos que devuelvan claves, valores o entradas
const gato = {
  nombre: "Kito",
  edad: 8,
  color: "Blanco",
};
// Object.values() devuelve un Array con los valores
const valoresGato = Object.values(gato);
console.log(valoresGato); // ['Kito', 8, 'Blanco']

// Object.keys() devuelve un Array con las claves
const clavesGato = Object.keys(gato);
console.log(clavesGato); // ['nombre', 'edad', 'color']

// Object.entries() devuelve un Array(es como una matriz) con las entradas [clave, valor]
const entradasGato = Object.entries(gato);
console.log(entradasGato); // [['nombre', 'Kito'], ['edad', 8], ['color', 'Blanco']]
// Para que sirve?
// Sirve para obtener tanto las claves como los valores de un objeto en un solo paso,
// lo que puede ser útil para iterar sobre ellos o para convertir el objeto en un formato
// más fácil de manejar, como un Map.

//SPREAD OPERATOR
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3); // [1, 2, 3, 4, 5, 6]
// si quiero copiar solo un array, lo reasigno con el spread
const arrayCopia = [...array1];
console.log(arrayCopia); // [1, 2, 3] la diferencia es que si hago arrayCopia = array1 y luego modifico array1, se modifica tambien arrayCopia porque apunta a la misma referencia en memoria. Con el spread operator creo una copia independiente

// Para objetos
const gatito = {
  nombre: "Michi",
  edad: 2,
}; // si quiero una copia independiente
const gatitoCopia = { ...gatito };
console.log(gatitoCopia); // { nombre: 'Michi', edad: 2 }

//si quiero agregar propiedades
const gatitoExtentido = { ...gatito, color: "Negro" };
console.log(gatitoExtentido); // { nombre: 'Michi', edad: 2, color: 'Negro' }







