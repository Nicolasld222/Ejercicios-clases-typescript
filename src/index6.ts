//Crear una clase Hotel con propiedades como nombre y ubicación. Crear clase Habitación con número de habitación,precio y estado. Agregar métodos para reservar y liberar habitación. Probar con algunos hoteles e interacciones.

class Hotel {
    nombre: string;
    ubicacion: string;
    habitaciones: Habitacion[];

    constructor(nombre: string, ubicacion: string) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.habitaciones = [];
    }

    // Método para agregar una habitación al hotel
    agregarHabitacion(habitacion: Habitacion): void {
        this.habitaciones.push(habitacion);
    }

    // Método para mostrar las habitaciones disponibles
    mostrarHabitacionesDisponibles(): void {
        console.log(`Habitaciones disponibles en el hotel ${this.nombre}:`);
        this.habitaciones.forEach(habitacion => {
            if (!habitacion.estado) {
                console.log(`Habitación ${habitacion.numero} - Precio: $${habitacion.precio}`);
            }
        });
    }
}


class Habitacion {
    numero: number;
    precio: number;
    estado: boolean; 

    constructor(numero: number, precio: number) {
        this.numero = numero;
        this.precio = precio;
        this.estado = false; 
    }

    
    reservar(): void {
        if (!this.estado) {
            this.estado = true;
            console.log(`Habitación ${this.numero} ha sido reservada.`);
        } else {
            console.log(`La habitación ${this.numero} ya está ocupada.`);
        }
    }

    liberar(): void {
        if (this.estado) {
            this.estado = false;
            console.log(`Habitación ${this.numero} ha sido liberada.`);
        } else {
            console.log(`La habitación ${this.numero} ya está libre.`);
        }
    }
}

const hotel1 = new Hotel("Hotel Paraíso", "Ciudad Central");


const habitacion101 = new Habitacion(101, 100);
const habitacion102 = new Habitacion(102, 120);
const habitacion103 = new Habitacion(103, 150);

hotel1.agregarHabitacion(habitacion101);
hotel1.agregarHabitacion(habitacion102);
hotel1.agregarHabitacion(habitacion103);


hotel1.mostrarHabitacionesDisponibles();


habitacion101.reservar();
habitacion102.reservar();
habitacion101.liberar();
habitacion103.reservar();


hotel1.mostrarHabitacionesDisponibles();