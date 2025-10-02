// Misión 1:

// const { resolve } = require("path");

// 1) Crea un array con 10 objetos, donde cada objeto represente un automóvil con la siguiente información:
// Marca
// Modelo
// Año
// Color
// 2) Usa un método de array para recorrer la lista e imprime por consola todos los datos de los automóviles cuyo año sea mayor a 2018.

const autos = [
  { marca: "Toyota", modelo: "Corolla", año: 2020, color: "Rojo" },
  { marca: "Ford", modelo: "Focus", año: 2019, color: "Azul" },
  { marca: "Chevrolet", modelo: "Onix", año: 2021, color: "Negro" },
  { marca: "Honda", modelo: "Civic", año: 2018, color: "Blanco" },
  { marca: "Hyundai", modelo: "Elantra", año: 2020, color: "Gris" },
  { marca: "Nissan", modelo: "Sentra", año: 2017, color: "Rojo" },
  { marca: "Kia", modelo: "Forte", año: 2021, color: "Azul" },
  { marca: "Volkswagen", modelo: "Jetta", año: 2019, color: "Negro" },
  { marca: "Subaru", modelo: "Impreza", año: 2020, color: "Blanco" },
  { marca: "Mazda", modelo: "3", año: 2018, color: "Gris" },
];
autos.forEach((auto) => {
  if (auto.año > 2018) {
    console.log(
      `Marca: ${auto.marca}, Modelo: ${auto.modelo}, Año: ${auto.año}, Color: ${auto.color}`
    );
  }
});

//Volvamos al array de los autos, y aplicamos desestructuracion
const [{ marca, modelo, año, color }] = autos; // aca desestructuro el array
const [primerAuto, segundoAuto] = autos; // aca utilizo el indice 0 y 1 del array
console.log(primerAuto, segundoAuto);

// arriba utilice el forEach recorriendo directamente el array, ahora lo hago con desestructuracion:
autos.forEach(({ marca, modelo, año, color }) => {
  console.log(`${marca} - ${modelo} - ${año} - ${color}`);
});
console.log("*********************************************");
//que imprima los autos del >2018
autos.forEach(({ marca, modelo, año, color }) => {
  año > 2018 ? console.log(`${marca}- ${modelo} - ${año} - ${color}`) : null;
});
console.log("**************************************");

//ahora quiero los autos de color rojo
autos.forEach(({ marca, modelo, año, color }) => {
  color === "Rojo"
    ? console.log(
        `Los autos de color rojo son  \n ${marca} - ${modelo} - ${año}`
      )
    : null;
});

//sin ternarios
autos.forEach(({ marca, modelo, año, color }) => {
  if (color === "Rojo") {
    console.log(`Los autos de color rojo son: ${marca} - ${modelo} - ${año}`);
  }
});

const autosRojos = autos.filter((color) => color == "Rojo");
autosRojos.forEach(({ marca, modelo, año }) => {
  console.log(`Los autos de color rojo son: \n ${marca} - ${modelo} - ${año}`);
});
contador = 0;
autos.forEach(({ marca, modelo, año, color }) => {
  if (color == "Rojo") {
    contador += 1;
    console.log(`Los autos de color rojos son ${marca}-${modelo}-${año}`);
  }
});
console.log("La cantidad de autos rojos es: ", contador);
//ahora lo mismo pero que devuelva cuantos autos son de color rojo