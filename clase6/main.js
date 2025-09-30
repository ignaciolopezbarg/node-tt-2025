//El intercambio de datos con un fuente externa lo hacemos con una api, que es como un contrato que reglamenta estos cambios,  entre le front y la base para intercambiar info en forma asincrona, con el metodo http, que es un modulo nativo de node, y en formato .json()
// Los metodos que utilizamos son FETCH, que es nativo de node, que retorna una promesa con un objeto response, hay que parsear la info, no captura los errores directamente, es mas liviano y no requiere de instalacion de dependencias externas.
// AXIOS, requiere instalarlo npm i axios, importarlo import axios from 'axios', y utiliza un codigo mas sencillo, no hay que parsear, y al pedir info no necesita indicar los errores, los intercepta directamente.

// Desafio:
// Misión 1: 
// Utiliza la API pública de Rick and Morty (docs) para obtener la lista de personajes.
// Con las herramientas then, catch y finally, procesa la respuesta y devuelve por consola un array con los primeros 5 resultados de los 20 personajes recibidos.

//Misión 2:
// Realiza el mismo ejercicio anterior, pero esta vez usa una función asíncrona con async y await para consumir la API.
// Asegúrate de manejar errores correctamente con un bloque try/catch.

const personajeFetch = async () => {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");

    if (!res.ok) {
      throw new Error(`Error HTTP: ${res.status}`);
    }

    const data = await res.json(); // traigo los 20 personajes

    console.log("Personajes:", data);
  } catch (err) {
    console.error("Error:", err.message);
  }
};

personajeFetch();

// mismo ejemplo usando axios:
// import axios from "axios"; para usar en la consola del navegador traje axios con un cdn
// Node.js sabe resolver módulos desde node_modules.
// Navegador no sabe. Para usar axios en navegador hay que:
// Usar un bundler (Vite, Webpack, Parcel, etc.) que empaquete los módulos.
// O usar la versión CDN de axios (<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>).
// Por eso, en Node.js funciona, pero en navegador da error.
//import axios from 'axios';
const personajeAxios = async () => {
  try {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    const personajes = res.data.results.slice(0, 5); // el objeto data trae results en la api
    personajes.forEach(p => {console.log(`Nombre: ${p.name} | Especie: ${p.species} | Estado: ${p.status} | Imagen: ${p.image}`);
        //traigo solo el nombre la especie  el estado y la url de la imagen
    });

    console.log("Personajes:", personajes);
  } catch (err) {
    console.error("Error:", err.message);
  }
};

personajeAxios();

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));

//   import chalk from 'chalk';

// console.log(chalk.red('Hola mundo'));
// // chalk colorea en consola 
// console.log(chalk.green('hola los del partido verde'))



