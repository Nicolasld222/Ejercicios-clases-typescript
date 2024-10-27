//Crear una clase Electrodoméstico con subclases Televisor, Nevera y Lavadora. Cada electrodoméstico tiene propiedades como precio y color. Crear algunos objetos y probar.

class Electrodoméstico{
    marca:string;

    constructor(marca:string){
        this.marca = marca
    }
}

class Televisor extends Electrodoméstico{
    pulgadas:number;
    precio:number;
    color:string;

    constructor(marca:string, pulgadas:number, precio:number, color:string){
        super(marca);
        this.pulgadas = pulgadas;
        this.precio = precio;
        this.color = color;

    }

    describeTv():void{
        console.log(`Este televicion es de la marca ${this.marca} y tiene ${this.pulgadas} pulgadas es del color ${this.color} y tiene un precio de ${this.precio} dolares`)
    }
}

class Nevera extends Electrodoméstico{
    puertas:number;
    precio:number;
    color:string;

    constructor(marca:string, puertas: number, precio:number, color:string){
        super(marca);
        this.puertas = puertas;
        this.precio = precio;
        this.color = color;
    }

    describeNev():void{
        console.log(`Esta nevra es de la marca ${this.marca} y tiene ${this.puertas} puertas es del color ${this.color} y tiene un precio de ${this.precio} dolares`)
    }
}

class Lavadora extends Electrodoméstico{
    modelo: string;
    precio: number;
    color: string;

    constructor(marca: string, modelo: string, precio: number, color: string) {
        super(marca);
        this.modelo = modelo;
        this.precio = precio;
        this.color = color;
    }

    describeLavadora(): void {
        console.log(`Esta lavadora es de la marca ${this.marca}, modelo ${this.modelo}, es de color ${this.color}, y su precio es de ${this.precio} dólares.`);
    }

}

const televisor = new Televisor("Samsung", 55, 800, "negro");
televisor.describeTv();

const nevera = new Nevera("LG", 2, 1200, "blanco");
nevera.describeNev();

const lavadora = new Lavadora("Whirlpool", "X123", 600, "plateado");
lavadora.describeLavadora();