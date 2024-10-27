//Crear una clase Persona con propiedades como nombre, edad, documento identidad y métodos como caminar(), hablar(), comer(). Crear algunos objetos Persona e interactuar con sus propiedades y métodos.

class Persona{
    nombre:string;
    edad:number;
    id:number;

    constructor(nombre:string, edad:number, id:number){
        this.nombre = nombre;
        this.edad = edad;
        this.id = id;
    }

    caminar(){
        console.log(`Hola soy ${this.nombre} y estoy caminando`)
    }
    hablar(){
        console.log(`Hola, ¿Como estas? me llamo ${this.nombre} tengo ${this.edad} años y mi id es ${this.id}`)
    }
    comer(){
        console.log(`Hola soy ${this.nombre} y estoy comiendo`)
    }
}

const Juan = new Persona("Juan", 25, 109040)

Juan.hablar();