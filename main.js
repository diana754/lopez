"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nom, ape) {
        this.nombre = nom;
        this.apellido = ape;
    }
    return BarMan;
}());
exports.BarMan = BarMan;
var Trago = /** @class */ (function () {
    function Trago(nom, col, cant) {
        this.nombre = nom;
        this.color = col;
        this.cantidad = cant;
    }
    return Trago;
}());
exports.Trago = Trago;
var Bar1 = new Bar('nueva era', 50);
var Bar2 = new Bar('el patio', 200);
console.log(Bar1);
console.log(Bar2);
var BarMan1 = new BarMan('sheila', 'Miranda');
var BarMan2 = new BarMan('thomas', 'Patzi');
console.log(BarMan1);
console.log(BarMan2);
var Trago1 = new Trago('botka', 'rosado', 60);
var Trago2 = new Trago('tekila', 'blanco', 150);
console.log(Trago1);
console.log(Trago2);
