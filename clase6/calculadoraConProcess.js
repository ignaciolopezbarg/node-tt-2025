const operacion = process.argv[2];
const n1 = Number(process.argv[3]); // sino lo toma como str
const n2 = Number(process.argv[4]);

switch (operacion) {
  case 'Suma': {
    console.log(`El resultado es: ${n1 + n2}`);
    break;
  }
  case 'Resta': {
    console.log(`El resultado es: ${n1 - n2}`);
    break;
  }
  case 'Division': {
    if (n2 === 0) {
      console.log('No se puede dividir por cero');
    } else {
      console.log(`El resultado es: ${n1 / n2}`);
    }
    break;
  }
  default:
    console.log('Operación no válida. Usa: Suma | Resta | Division');
}

