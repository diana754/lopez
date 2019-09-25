"use strict";
exports.__esModule = true;
var Bar = /** @class */ (function () {
    function Bar(nom, cap) {
        this.nombre = nom;
        this.capacidad = cap;
    }
    Bar.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Bar.prototype.setCapacidad = function (cap) {
        this.capacidad = cap;
    };
    Bar.prototype.getNombre = function () {
        return this.nombre;
    };
    Bar.prototype.getCapacidad = function () {
        return this.capacidad;
    };
    return Bar;
}());
exports.Bar = Bar;
var BarMan = /** @class */ (function () {
    function BarMan(nom, ape) {
        this.nombre = nom;
        this.apellido = ape;
    }
    BarMan.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    BarMan.prototype.setApellido = function (ape) {
        this.apellido = ape;
    };
    BarMan.prototype.getNombre = function () {
        return this.nombre;
    };
    BarMan.prototype.getApellido = function () {
        return this.apellido;
    };
    return BarMan;
}());
exports.BarMan = BarMan;
var Trago = /** @class */ (function () {
    function Trago(nom, col, cant) {
        this.nombre = nom;
        this.color = col;
        this.cantidad = cant;
    }
    Trago.prototype.setNombre = function (nom) {
        this.nombre = nom;
    };
    Trago.prototype.setColor = function (col) {
        this.color = col;
    };
    Trago.prototype.setcantidad = function (cant) {
        this.cantidad = cant;
    };
    Trago.prototype.getNombre = function () {
        return this.nombre;
    };
    Trago.prototype.getColor = function () {
        return this.color;
    };
    Trago.prototype.getCantidad = function () {
        return this.cantidad;
    };
    return Trago;
}());
exports.Trago = Trago;
var Bar1 = new Bar('nueva era', 50);
var Bar2 = new Bar('el patio', 200);
Bar1.setNombre('estrella');
Bar2.setCapacidad(70);
console.log(Bar1.getNombre());
console.log(Bar2.getCapacidad());
var BarMan1 = new BarMan('sheila', 'Miranda');
var BarMan2 = new BarMan('thomas', 'Patzi');
BarMan1.setNombre('dota');
BarMan2.setApellido('laime');
console.log(BarMan1.getNombre());
console.log(BarMan2.getApellido());
var Trago1 = new Trago('botka', 'rosado', 60);
var Trago2 = new Trago('tekila', 'blanco', 150);
Trago1.setNombre('sampan');
Trago2.setColor('verde');
Trago2.setcantidad(150);
console.log(Trago1.getNombre());
console.log(Trago2.getColor());
console.log(Trago2.getCantidad());
