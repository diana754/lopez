// TAREA: HACER UNA CLASE QUE SE LLAME "Auto" el cual reciba como parametros 
//(ruedas, color, puertas, marca, modelo)
export class Auto {
    ruedas: number;
    color: string;
    puertas: number;
    marca: string;
    modelo: string;
    constructor(_ruedas, _color, _puertas, _marca, _modelo) {
        this.ruedas = _ruedas;
        this.color = _color;
        this.puertas = _puertas;
        this.marca = _marca;
        this.modelo = _modelo;
    }
}
let camion: Auto = new Auto(4, 'blanco', 4, 'toyota', 'x10');
console.log(camion);
