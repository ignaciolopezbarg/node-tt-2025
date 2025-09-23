// Misión 1:

// 1) Crea un array con 10 objetos, donde cada objeto represente un automóvil con la siguiente información:
// Marca
// Modelo
// Año
// Color
// 2) Usa un método de array para recorrer la lista e imprime por consola todos los datos de los automóviles cuyo año sea mayor a 2018.

const autos = [
    { marca: 'Toyota', modelo: 'Corolla', año: 2020, color: 'Rojo' },
    { marca: 'Ford', modelo: 'Focus', año: 2019, color: 'Azul' },
    { marca: 'Chevrolet', modelo: 'Onix', año: 2021, color: 'Negro' },
    { marca: 'Honda', modelo: 'Civic', año: 2018, color: 'Blanco' },
    { marca: 'Hyundai', modelo: 'Elantra', año: 2020, color: 'Gris' },
    { marca: 'Nissan', modelo: 'Sentra', año: 2017, color: 'Rojo' },
    { marca: 'Kia', modelo: 'Forte', año: 2021, color: 'Azul' },
    { marca: 'Volkswagen', modelo: 'Jetta', año: 2019, color: 'Negro' },
    { marca: 'Subaru', modelo: 'Impreza', año: 2020, color: 'Blanco' },
    { marca: 'Mazda', modelo: '3', año: 2018, color: 'Gris' }
];
autos.forEach(auto => {
    if(auto.año > 2018){
        console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Año: ${auto.año}, Color: ${auto.color}`);
    }
})
//CLASE 3:
//funciones anonimas
 function nombreFuncion(){
    console.log('estoy en la clase 3')
}
// funciones expresadas
const funcionExpresada = () => {
    console.log('estoy en la clase 3')
}
//funciones flecha
const funcionFlecha = () => {
    console.log('estoy en la clase 3')
}

//DENTRO DE LOS PARENTESIS VAN LOS PARAMETROS Y LA RETORNAR USAMOS AL INVOCAR LOS ARGUMENTOS
let name = ''
function saludar (name){
    console.log(`Hola ${name}, bienvenido!`)
}
saludar('pepe')

const sumar = (a,b,c) => {
    let resultado = a+b+c
    console.log(resultado)
}
sumar(1,2,3)
sumar(4,5,6)

const restar = (n1,n2) =>{
    return n1-n2
}
console.log(restar(20,15))

class User{
    constructor(name,age,password,email){
        this.name = name,
        this.age = age,
        this.password = password,
        this.email = email
    }
    login = (inputEmail, inputPassword) => {
      this.email === inputEmail && this.password === inputPassword ? console.log('login exitoso') : console.log('password o email ingresados erroneos')
    }
}

class Student extends User {
    constructor (name,age,password, email, is_Activity, courses){
        super (name, email, age, password),
        this.is_Activity = is_Activity,
        this.courses = courses
    }
    saludar = () => { console.log(`Bienvenido ${this.name} al curso de ${this.courses[1]}`)}
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
//Volvamos al array de los autos, y aplicamos desestructuracion
const [{marca, modelo, año, color }] = autos; // aca desestructuro el array
const [primerAuto, segundoAuto] = autos; // aca utilizo el indice 0 y 1 del array
console.log(primerAuto ,segundoAuto)

// arriba utilice el forEach recorriendo directamente el array, ahora lo hago con desestructuracion:
autos.forEach(({marca, modelo, año, color}) => {
console.log(`${marca} - ${modelo} - ${año} - ${color}`)
})
console.log('*********************************************')
//que imprima los autos del >2018
autos.forEach (({marca, modelo, año, color}) =>{
    año > 2018 ? console.log(`${marca}- ${modelo} - ${año} - ${color}`) : null;
})
console.log('**************************************')

//ahora quiero los autos de color rojo
autos.forEach(({marca, modelo, año, color}) =>{
    color === 'Rojo' ? console.log(`Los autos de color rojo son  \n ${marca} - ${modelo} - ${año}`) : null
})

//sin ternarios
autos.forEach(({ marca, modelo, año, color }) => {
  if (color === 'Rojo') {
    console.log(`Los autos de color rojo son: ${marca} - ${modelo} - ${año}`);
  }
});

const autosRojos = autos.filter((color) => color == 'Rojo' )  
autosRojos.forEach(({marca, modelo, año}) =>{
    console.log(`Los autos de color rojo son: \n ${marca} - ${modelo} - ${año}`)
})
contador=0;
autos.forEach(({ marca, modelo, año, color }) => {
    if(color == 'Rojo'){
        contador +=1;
        console.log(`Los autos de color rojos son ${marca}-${modelo}-${año}`)
    }
 
}
)
console.log('La cantidad de autos rojos es: ', contador)
 //ahora lo mismo pero que devuelva cuantos autos son de color rojo

 const letras = ['n', 'a', 'c', 'h', 'o'];
 const palabra = letras.reduce((acum,letra) => acum + letra, 'La persona es: ')
 console.log(palabra)

 // Trim y flat

 const cadena = '    hola a todos   '
 console.log(cadena)
 const sinEspacios = cadena.trim()
 console.log(sinEspacios)

 const numeros5 = [1,2,3,[4,5], 6,7, [89,88,87]]
 console.log(numeros5)
 const aplanada = numeros5.flat()
 console.log(aplanada)

//  let mensajes = [];
//  //let intentoDeMensajes = prompt('ingrese su mensaje')
//  if(intentoDeMensajes.trim().length >0){
//     mensajes.push(intentoDeMensajes.trim())
//     console.log(mensajes)
//  } else {
//     console.log('no se ha enviado ningunn mensaje')
//  }
 
//  Registrador de tickets de eventos
//  ¿Cómo lo hacemos? Se creará una clase que permitirá llevar una gestión completa de usuarios 
// que deseen acceder a dichos eventos.
//  ✓ Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
//  ✓ La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un 
// costo adicional al precio de cada evento.
//  ✓ Debe contar con el método “getEventos” El cual mostrará los eventos guardados.
//  ✓ Debe contar con el método “agregarEvento” El cual recibirá los siguientes parámetros:
//  ○ nombre
//  ○ lugar
//  ○ precio (deberá agregarse un 0.15 del valor original)
//  ○ capacidad (50 por defecto)
//  ○ fecha (hoy por defecto)
//  El método deberá crear además el campo id autoincrementable y el campo “participantes” 
// que siempre iniciará con un arreglo vacío.
// ✓ Debe contar con un método “agregarUsuario” El cual recibirá:
//  ○ id del evento (debe existir, agregar validaciones)
//  ○ id del usuario
//  El método debe evaluar que el evento exista y que el usuario no haya estado registrado 
// previamente (validación de fecha y capacidad se evitará para no alargar el reto)
//  Si todo está en orden, debe agregar el id del usuario en el arreglo “participantes” de ese 
// evento.
//  ✓ Debe contar con un método “ponerEventoEnGira” El cual recibirá:
//  ○ id del evento
//  ○ nueva localidad
//  ○ nueva fecha
//  El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y 
// sus participantes vacíos (Usar spread operator para el resto de las propiedades
 class TicketManager{
    eventos = []
    #precioBaseGanancia = 1.15;
    constructor (){
        this.id = 1;
    }
    getEventos(){
        return this.eventos;
    }
    agregarEventos(nombre,lugar,precio,capacidad = 50,fecha){
        if(!nombre || !lugar || !precio ||!capacidad ||!fecha){
            console.log('Faltan datos obligatorios')
            return;
        }
const evento = {
    id : this.id++,
    nombre,
    lugar,
    precio : precio * this.#precioBaseGanancia,
    capacidad,
    fecha : fecha || new Date().toLocaleDateString(),
    participantes : []
}
this.eventos.push(evento);
    }
    agregarUsuarios(idEvento, idUsuario){
        const evento = this.eventos.find(evento => evento.id === idEvento);
        if(!evento){
            console.log('Evento no encontrado');
            return;
        }
        if(evento.participantes.includes(idUsuario)){
            console.log('Usuario ya registrado en este evento');
            return;
        }
        evento.participantes.push(idUsuario);
    }
    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha){
        const evento = this.eventos.find(evento => evento.id === idEvento);
        if(!evento){
            console.log('Evento no encontrado');
            return;
        }
        const nuevoEvento = {
            ...evento,
            id : this.id++,
            lugar : nuevaLocalidad,
            fecha : nuevaFecha,
            participantes : []
        }
        this.eventos.push(nuevoEvento);
    }
}
//Otro ejemplo de clase pero agregando una VARIABLE PRIVADA
class Animal{
    //declaro lo privado con # y solo se puede usar dentro de la clase no en las instancias
    #especie = ''
    constructor(nombre, edad, especie){
        this.nombre = nombre,
        this.edad = edad,
        this.#especie = especie
    }
    // para llamar a la privada creo un metodo publico
    getEspecie(){
        return this.#especie;
    }
    getSaludar(){
        console.log(`Hola soy ${this.nombre}, tengo ${this.edad} años y soy un ${this.#especie}`)
    }
}
const perro = new Animal('Fido', 17, 'Perro');
console.log(perro)
perro.getSaludar();
perro.getEspecie();
console.log(perro.getEspecie()); //Perro

//Herencia:
class Descendiente extends Animal{
    constructor(nombre, edad, especie, raza, color){
        super(nombre, edad, especie),
        this.raza = raza,
        this.color = color
    }
    
    getSaludar(){
        console.log(`Hola soy ${this.nombre}, tengo ${this.edad} años,  de raza ${this.raza} y color ${this.color}`)
    }
}// las variables privadas no se heredan
const nuevoPerro = new Descendiente('Luna', 3, 'Perro', 'Pastor Aleman', 'Negro');
console.log(nuevoPerro)

//Metodo INCLUDES, devuelve un booleano si existe o no
console.log(letras.includes('n')) //true
console.log(letras.includes('x')) //false

console.log(letras.indexOf('n')) //0
console.log(letras.indexOf('x')) //-1 no existe

//Metodo de objetos que devuelvan claves, valores o entradas
const gato = {
    nombre: 'Kito',
    edad: 8,
    color: 'Blanco'
}
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
const array1 = [1,2,3];
const array2 = [4,5,6];
const array3 = [...array1, ...array2];
console.log(array3); // [1, 2, 3, 4, 5, 6]
// si quiero copiar solo un array, lo reasigno con el spread
const arrayCopia = [...array1];
console.log(arrayCopia); // [1, 2, 3] la diferencia es que si hago arrayCopia = array1 y luego modifico array1, se modifica tambien arrayCopia porque apunta a la misma referencia en memoria. Con el spread operator creo una copia independiente

// Para objetos
const gatito ={
    nombre: 'Michi',
    edad: 2,
} // si quiero una copia independiente
const gatitoCopia = { ...gatito };
console.log(gatitoCopia); // { nombre: 'Michi', edad: 2 }

//si quiero agregar propiedades
const gatitoExtentido = {...gatito, color: 'Negro'}
console.log(gatitoExtentido); // { nombre: 'Michi', edad: 2, color: 'Negro' }

//Desafio extra:
/*Realizar una clase ProductManager que gestione un conjunto de productos.
Debe crearse desde un constructor con el elemento products, que sera un array vacio.
Debe contar con un metodo addProduct que reciba un producto y lo agregue al array de productos.
-Validar que no se repita el campo code y que todos los campos sean obligatorios.
-Implementar un id autoincrementable para cada producto.
Se debe contar con un metodo getProducts que devuelva el array de productos.
Se debe contar con un metodo getProductById que reciba un id y devuelva el producto correspondiente. En caso de no encontrarlo devolver un mensaje Not Found. 
*/
class ProductManager {
    constructor(){
        this.products = [];
        this.idProduct = 0;
    }
    addProduct(name, description, code, price, stock, thumbnail){
        if(!name || !description || !code || !price || !stock || !thumbnail){
            console.log('Todos los campos son obligatorios')
            return;
    } if(this.products.find((product) => product.code === code)){
        console.log('No se pueden tener productos con el mismo code')
        return;
    }
   this.idProduct++;
const newProduct = {
   id: this.idProduct,
    name,
    description,
    code,
    price,
    stock,
    thumbnail
}
this.products.push(newProduct)
}
get Products(){
    return this.products}  

getProductById(id){
    const product = this.products.find(p => p.id === id);
    if(product){
        return product;
    } else {
        return 'Producto no encontrado';
    }
}  
}

const manager = new ProductManager; // manager es una instancia del ProductManager
manager.addProduct('laptop', 'I5 128gb', 'A001', 1500, 25, 'sin imagen')
manager.addProduct('tv', 'smart 50', 'A2546', 450, 7,'sin imagen' )
manager.addProduct('smartphone', 'samsungA78', 'T002', 850, 25, 'http://mapeobuscando')
console.log(manager.Products)

console.log(manager.getProductById(2))
console.log(manager.getProductById(5)) //producto no encontrado