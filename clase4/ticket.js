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
// sus participantes vacíos (Usar spread operator para el resto de las propiedades)

class TicketManager {
  eventos = [];
  #precioBaseGanancia = 1.15;
  constructor() {
    this.id = 1;
  }
  getEventos() {
    return this.eventos;
  }
  agregarEventos(nombre, lugar, precio, capacidad = 50, fecha) {
    if (!nombre || !lugar || !precio || !capacidad || !fecha) {
      console.log("Faltan datos obligatorios");
      return;
    }
    const evento = {
      id: this.id++,
      nombre,
      lugar,
      precio: precio * this.#precioBaseGanancia,
      capacidad,
      fecha: fecha || new Date().toLocaleDateString(),
      participantes: [],
    };
    this.eventos.push(evento);
  }
  agregarUsuarios(idEvento, idUsuario) {
    const evento = this.eventos.find((evento) => evento.id === idEvento);
    if (!evento) {
      console.log("Evento no encontrado");
      return;
    }
    if (evento.participantes.includes(idUsuario)) {
      console.log("Usuario ya registrado en este evento");
      return;
    }
    evento.participantes.push(idUsuario);
  }
  ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
    const evento = this.eventos.find((evento) => evento.id === idEvento);
    if (!evento) {
      console.log("Evento no encontrado");
      return;
    }
    const nuevoEvento = {
      ...evento,
      id: this.id++,
      lugar: nuevaLocalidad,
      fecha: nuevaFecha,
      participantes: [],
    };
    this.eventos.push(nuevoEvento);
  }
}