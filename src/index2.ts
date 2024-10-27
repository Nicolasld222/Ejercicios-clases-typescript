//Crear una clase CuentaBancaria con propiedades como número de cuenta, titular y saldo. Agregar métodos para depositar, retirar y consultar saldo. Crear varias cuentas y probar los métodos.

class CuentaBancaria{
    numero:number;
    titular:string;
    saldo:number;

    constructor(numero:number, titular:string, saldo: number){
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Depósito de ${monto} realizado. Saldo actual: ${this.saldo}`);
        } else {
            console.log("El monto a depositar debe ser positivo.");
        }
    }

    retirar(monto: number): void {
        if (monto > 0 && monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`Retiro de ${monto} realizado. Saldo actual: ${this.saldo}`);
        } else if (monto > this.saldo) {
            console.log("Fondos insuficientes para realizar el retiro.");
        } else {
            console.log("El monto a retirar debe ser positivo.");
        }
    }

    consultarSaldo(): void {
        console.log(`El saldo actual de la cuenta ${this.numero} es: ${this.saldo}`);
    }
}

const cuenta1 = new CuentaBancaria(12345, "Juan Perez", 1000);
const cuenta2 = new CuentaBancaria(67890, "Maria Gomez", 500);

cuenta1.consultarSaldo();
cuenta1.depositar(300);
cuenta1.retirar(200);
cuenta1.consultarSaldo();

cuenta2.consultarSaldo();
cuenta2.depositar(150);
cuenta2.retirar(1000); 
cuenta2.consultarSaldo();