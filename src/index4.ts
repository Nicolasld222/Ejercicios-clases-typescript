//Crear una clase FiguraGeometrica y subclases Triángulo, Círculo y Cuadrado. Implementar el método area() en cada subclase. Crear objetos y calcular sus áreas.

class FiguraGeometrica {
    areafigura: number; 

    constructor(areafigura: number){
        this.areafigura = areafigura
    }
}

// Subclase Triangulo
class Triangulo extends FiguraGeometrica {
    base: number;
    altura: number;

    constructor(areafigura: number, base: number, altura: number) {
        super(areafigura);
        this.base = base;
        this.altura = altura;
    }

    area(): number {
        return (this.base * this.altura) / 2;
    }
}

// Subclase Circulo
class Circulo extends FiguraGeometrica {
    radio: number;

    constructor(areafigura: number,radio: number) {
        super(areafigura);
        this.radio = radio;
    }

    area(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

// Subclase Cuadrado
class Cuadrado extends FiguraGeometrica {
    lado: number;

    constructor(areafigura:number,lado: number) {
        super(areafigura);
        this.lado = lado;
    }

    area(): number {
        return Math.pow(this.lado, 2);
    }
}

const triangulo = new Triangulo(0, 5, 4);  
const circulo = new Circulo(0, 3);         
const cuadrado = new Cuadrado(0, 6);       

console.log('Área del triángulo:', triangulo.area());
console.log('Área del círculo:', circulo.area());
console.log('Área del cuadrado:', cuadrado.area());