const precios = [100, 250, 50, 89, 250, 980, 3500, 4500, 12000, 7500];
const IVA = 0.21; 

const preciosConIVA = precios.map(precio => precio * (1 + IVA));
console.log(`El precio final de los productos con el IVA incluido es : ${preciosConIVA}`)

const valoresIVA = precios.map(precio => (precio * IVA).toFixed(2));
console.log(`El valor del IVA de cada producto es: ${valoresIVA}`)