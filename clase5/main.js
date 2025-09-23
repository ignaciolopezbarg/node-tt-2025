console.log("hola desde la consola llamada por el script");
// usamos los dos scripts npm run dev para la etapa de desarrollo, por eso nodemon que recarga al detectar cambios sin tener que reiniciar el servidor ** nodemon main.js
// el otro script lanza el codigo pero no reinicia el servidor, solo corre los scripts, npm run start corre node main.js

// Dirname: variable global que siempre referencia las rutas de la app, a la raiz donde esta ubicado el archivo. O sea es una ruta absoluta a la raiz del proyecto.
//  Con common ya esta incluido, pero con Ecma se debe importar lo siguiente:
// import {fileURLToPath} from 'url';
// import {dirname} from 'path';
// es un modulo nativo, al igual que http, console, path,url, process. Con npm traemos modulos de terceros
// si quiero actualizar algun modulo: npm update <nombre modulo> @latest ( o @version)
// ej: npm update nodemon @latest o npm update nodemon @3.12.5
// si quiero desinstalar npm uninstall <nombre del modulo>
// Los modulos son bloques de codigo, nativos o de terceros, que pueden ser reutilizados en distintos bloques o apps. Los nativos los trae node, y los de terceros los traemos con npm

// 1. path

// Es un módulo nativo de Node.js.
// Sirve para trabajar con rutas de archivos y directorios.
// Ejemplos de funciones útiles:

// dirname(ruta) → devuelve la carpeta que contiene el archivo.
// basename(ruta) → devuelve el nombre del archivo.
// extname(ruta) → devuelve la extensión.

// join() y resolve() → arman rutas completas sin que vos tengas que preocuparte por / o \ según el sistema operativo.

//filename representa la ruta absoluta, con ecs hay que armarlo porque no existe nativo como es con common.
//import { fileURLToPath } from 'url';
//const __filename = fileURLToPath(import.meta.url);

//dirname no existe con ecs, hay que importar lo siguiente:
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url); // ruta completa del archivo
// const __dirname = dirname(__filename);  // ruta absoluta de la carpeta

// Si el comando es GET, imprime por consola el mensaje:
// Toma un dato
// 2.  Si el comando es POST {data}, imprime por consola el mensaje:
// Recibimos {data} satisfactoriamente
// 3.  Si el comando es PUT {id}, imprime por consola el mensaje:
// Modificamos el item con id: {id} satisfactoriamente
// 4.  Si el comando es DELETE {id}, imprime por consola el mensaje:
// El item con el id: {id} se eliminó con éxito

const manejoComandos = (opcion, data = null, id = null) =>
  // les doy null por defecto, asi cuando no le pase id o data, no me entregue undefined
  {
    switch (opcion) {
      case "GET":
        {
          console.log(`Toma un dato: ${data}`);
        }
        break;
      case "POST":
        {
          console.log(`Recibimos los datos: ${data} con exito`);
        }
        break;
      case "PUT":
        {
          console.log(`El item con id: ${id} se modifico con exito`);
        }
        break;
      case "DELETE":
        {
          console.log(`El item con id: ${id} se elimino con exito`);
        }
        break;
      default:
        {
          console.log("El comando ingresado no es valido");
        }
        return;
    }
  };
manejoComandos('POST', 'Juan')
manejoComandos('GET', null)
manejoComandos('PUT', null,25)
manejoComandos('DELETE', null, 5)

// Lo mismo lo puedo hacer validando los id y data, y usando return en cada caso
const usoComandos = (comando, data , id ) => {
  switch (comando) {
    case "GET": {
      return "Toma un dato";
    }

    case "POST": { 
      return data === undefined  
      ?  "No se recibieron datos" 
      : `Recibimos el dato: ${data} con exito` 
    }

    case "PUT": {
      return id === undefined
      ? "No se recibio el id"
      : `Se modifico el id: ${id} con exito`
    }

    case "DELETE": {
      return id === undefined
      ? "No se recibio el id"
      : `Se elimino el producto con id: ${id}`
    }

    default:
      return 'El comando no existe'        
  }
};

console.log(usoComandos("POST", "pepe"));   
console.log(usoComandos("GET"));    
console.log(usoComandos("PUT", null, 107));
console.log(usoComandos("DELETE", null, 42));
console.log(usoComandos('cualquiercosa'))

