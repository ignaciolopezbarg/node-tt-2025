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