//Crear una clase Vehículo con subclases Coche, Barco y Avión. Cada subclase implementa su propio método desplazarse (). Crear objetos de las subclases y probar sus métodos.

class Vehículo{
    marca: string;
    modelo: string;

    constructor(marca:string, modelo: string){
        this.marca = marca;
        this.modelo = modelo;
    }

    describir():void{
        console.log(`Este vehiculo es ${this.marca} ${this.modelo}`)
    }
}

class Coche extends Vehículo{
    puertas:number;

    constructor(marca: string, modelo: string, puertas:number){
        super(marca, modelo)
        this.puertas= puertas
    }

    tocarbocina():void{
        console.log("Beep, Beep, El coche toca la bocina")
    }
}

class Barco extends Vehículo{
    maxPersonas: number

    constructor(marca: string, modelo: string, maxPersonas:number){
        super(marca, modelo);
        this.maxPersonas = maxPersonas
    }

    conducirMar():void{
        console.log(`Este barco va a conducir hacia el mar`)
    }
}

class Avión extends Vehículo{
    aeropuerto: string

    constructor(marca: string, modelo: string, aeropuerto:string){
        super(modelo,marca);
        this.aeropuerto = aeropuerto;
    }

    despliegue():void{
        console.log(`Este avion va a despliegar desde ${this.aeropuerto}`)
    }
}

const coche1 = new Coche("Toyota", "Corolla", 4);
coche1.describir();
coche1.tocarbocina();