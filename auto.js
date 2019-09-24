"use strict";
exports.__esModule = true;
// TAREA: HACER UNA CLASE QUE SE LLAME "Auto" el cual reciba como parametros 
//(ruedas, color, puertas, marca, modelo)
var Auto = /** @class */ (function () {
    function Auto(_ruedas, _color, _puertas, _marca, _modelo) {
        this.ruedas = _ruedas;
        this.color = _color;
        this.puertas = _puertas;
        this.marca = _marca;
        this.modelo = _modelo;
    }
    return Auto;
}());
exports.Auto = Auto;
var camion = new Auto(4, 'blanco', 4, 'toyota', 'x10');
console.log(camion);
