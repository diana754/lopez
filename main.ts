export class Bar {
    nombre: string;
    capacidad: number;
    constructor(nom: string, cap: number) {
        this.nombre = nom;
        this.capacidad = cap;
    }
}
export class BarMan {
    nombre: string;
    apellido: string;
    constructor(nom: string, ape: string) {
        this.nombre = nom;
        this.apellido = ape;
    }
}
export class Trago {
    nombre: string;
    color: string;
    cantidad: number;
    constructor(nom: string, col: string, cant: number) {
        this.nombre = nom;
        this.color = col;
        this.cantidad = cant;
    }
}
let Bar1: Bar = new Bar('nueva era', 50);
let Bar2: Bar = new Bar('el patio', 200);
console.log(Bar1);
console.log(Bar2);

let BarMan1: BarMan = new BarMan('sheila', 'Miranda');
let BarMan2: BarMan = new BarMan('thomas', 'Patzi');
console.log(BarMan1);
console.log(BarMan2);

let Trago1: Trago = new Trago('botka', 'rosado', 60);
let Trago2: Trago = new Trago('tekila', 'blanco', 150);
console.log(Trago1);
console.log(Trago2);

