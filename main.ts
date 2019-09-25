export class Bar {
    private nombre: string;
    private capacidad: number;
    constructor(nom: string, cap: number) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    public setNombre(nom: string): void {
        this.nombre = nom;
    }
    public setCapacidad(cap: number): void {
        this.capacidad = cap;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getCapacidad(): number {
        return this.capacidad;
    }
}
export class BarMan {
    private nombre: string;
    private apellido: string;
    constructor(nom: string, ape: string) {
        this.nombre = nom;
        this.apellido = ape;
    }
    public setNombre(nom: string): void {
        this.nombre = nom;
    }
    public setApellido(ape: string): void {
        this.apellido = ape;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getApellido(): string {
        return this.apellido;
    }
}

export class Trago {
    private nombre: string;
    private color: string;
    private cantidad: number;
    constructor(nom: string, col: string, cant: number) {
        this.nombre = nom;
        this.color = col;
        this.cantidad = cant;
    }
    public setNombre(nom: string): void {
        this.nombre = nom;
    }
    public setColor(col: string): void {
        this.color = col;
    }
    public setcantidad(cant: number): void {
        this.cantidad = cant;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getColor(): string {
        return this.color;
    }
    public getCantidad(): number {
        return this.cantidad;
    }
}
let Bar1: Bar = new Bar('nueva era', 50);
let Bar2: Bar = new Bar('el patio', 200);
Bar1.setNombre('estrella');
Bar2.setCapacidad(70);
console.log(Bar1.getNombre());
console.log(Bar2.getCapacidad());

let BarMan1: BarMan = new BarMan('sheila', 'Miranda');
let BarMan2: BarMan = new BarMan('thomas', 'Patzi');
BarMan1.setNombre('dota');
BarMan2.setApellido('laime');
console.log(BarMan1.getNombre());
console.log(BarMan2.getApellido());

let Trago1: Trago = new Trago('botka', 'rosado', 60);
let Trago2: Trago = new Trago('tekila', 'blanco', 150);
Trago1.setNombre('sampan');
Trago2.setColor('verde');
Trago2.setcantidad(150);
console.log(Trago1.getNombre());
console.log(Trago2.getColor());
console.log(Trago2.getCantidad());