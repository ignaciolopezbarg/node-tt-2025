// Generar un script para la operacion de un cajero automatico
// 1 mostrar mensaje de bienvenida
// 2 permitir hasta 3 intentos de ingreso con el pin del cliente 
//  a si ingresa correctamente dar mensaje de bienvenida
//  b terminados los intento dar mensaje de comunicarse con el banco por bloqueo de cuenta 
// 3 Una vez ingresado el pin mostrar menu de opciones
//   a Saldo 
//   b Retiro 
//   c Deposito 
//   d Salir 
// 4 Al finalizar mostrar mensaje de despedida, si se te ocurre algo para mejorar la experiencia del usuario.
const PIN = '1234';
let saldo = 1500
let bienvenida = alert('Bienvenido al cajero TT')
let pin = prompt('Ingrese su PIN')
let numeroIntentos = 0;
while(numeroIntentos < 2 && pin != PIN){
    alert('PIN incorrecto, intente nuevamente')
    pin = prompt('Ingrese su PIN')
    numeroIntentos++;
}
if(pin===PIN){
    let opcion = '';
    while(opcion != 'salir'){ 

     opcion = prompt('elija alguna de las siguientes opciones: \n  💰saldo \n  🤑retiro \n  💵deposito \n   💳transferencia \n  📤salir').toLowerCase();
    switch(opcion){
         case 'saldo':
            alert('Su saldo es de $' + saldo)
             break;
        case 'retiro':
            let montoRetiro = parseInt(prompt('Ingrese el monto a retirar:'))
            if(montoRetiro <= saldo){
                saldo -= montoRetiro;
                alert('Retiro exitoso, su nuevo saldo es de $' + saldo)
            } else {
                alert('Fondos insuficientes')
            }
            break;
        case 'deposito':
            let deposito = parseInt(prompt('Ingrese monto deposito'))
            saldo += deposito
            alert('deposito exitoso, el nuevo saldo es de $: ' + saldo)
            break;
        case 'salir':
            alert('gracias por usar los servicios de cajeroTT')
            break; 
        case 'transferencia':
            let destinatario = prompt('Ingrese el nombre del destinatario')
            let montoATransferir = parseInt(prompt('Ingrese el monto a transferir'))
             if(isNaN(montoATransferir) || montoATransferir <= 0){
                alert('monto invalido')
             } else if(montoATransferir > saldo){
                alert('Fondos insuficientes')
             } else {
                saldo-= montoATransferir;
                alert('Transferencia exitosa, por el monto de $' + montoATransferir + ' a ' + '\n' + 'cuenta destino: ' + destinatario + '\n' + 'El nuevo saldo es de $' + saldo)
                break;
             }
        default:
            alert('Opción no válida, por favor intente nuevamente.')
            break;
    }
}
} else {
    alert('supero el numero de intentos, comuniquese con el banco, su cuenta esta bloqueada')
}