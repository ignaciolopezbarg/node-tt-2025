// Generar un script para la operacion de un cajero automatico
// 1 mostrar mensaje de bienvenida
// 2 permitir hasta 3 intentos de ingreso con el pin del cliente 
//  a si ingresa correctamente dar mensaje de bienvenida
//  b terminados los intento dar mensaje de comunicarse con el banco por bloqueo de cuenta 
// 3 Una vez ingresado el pin mostrar menu de opciones
//   a Saldo 
//   b Retiro 
//   c Deposito 
//   d Transferencia
//   d Salir 

const PIN = '1234';
let saldo = 1500;
alert('Bienvenido al cajero TT');

let pin = prompt('Ingrese su PIN');
let numeroIntentos = 0;

while (numeroIntentos < 2 && pin !== PIN) {
    alert('PIN incorrecto, intente nuevamente');
    pin = prompt('Ingrese su PIN');
    numeroIntentos++;
}

if (pin === PIN) {
    let opcion = '';
    while (true) { //esto me genera un bucle infinito hasta que use la op 5 o use una opcion no valida
        opcion = prompt(
            'Elija alguna de las siguientes opciones: \n' +
            '1. 💵 Saldo \n' +
            '2. 🤑 Retiro \n' +
            '3. 💵 Depósito \n' +
            '4. 💳 Transferencia \n' +
            '5. 📤 Salir'
        )?.toLowerCase().trim();

        if (!opcion) continue; 

        if (opcion === 'salir' || opcion === '5') {
            alert('Gracias por usar los servicios de Cajero TT');
            break;
        }

        switch (opcion) {
            case '1': // saldo
                alert('Su saldo es de $' + saldo);
                break;

            case '2': // retiro
                let montoRetiro = parseInt(prompt('Ingrese el monto a retirar:'));
                if (montoRetiro <= saldo) {
                    saldo -= montoRetiro;
                    alert('Retiro exitoso, su nuevo saldo es de $' + saldo);
                } else {
                    alert('Fondos insuficientes');
                }
                break;

            case '3': // depósito
                let deposito = parseInt(prompt('Ingrese monto depósito:'));
                saldo += deposito;
                alert('Depósito exitoso, el nuevo saldo es de $' + saldo);
                break;

            case '4': // transferencia
                let destinatario = prompt('Ingrese el nombre del destinatario');
                let montoATransferir = parseInt(prompt('Ingrese el monto a transferir'));
                if (isNaN(montoATransferir) || montoATransferir <= 0) {
                    alert('Monto inválido');
                } else if (montoATransferir > saldo) {
                    alert('Fondos insuficientes');
                } else {
                    saldo -= montoATransferir;
                    alert(
                        'Transferencia exitosa de $' + montoATransferir +
                        ' a ' + destinatario +
                        '\nNuevo saldo: $' + saldo
                    );
                }
                break;

            default:
                alert('Opción no válida, por favor intente nuevamente.');
        }
    }
} else {
    alert('Superó el número de intentos. Comuniquese con el banco, su cuenta está bloqueada.');
}