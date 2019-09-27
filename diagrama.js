"use strict";
exports.__esModule = true;
var Curso = /** @class */ (function () {
    function Curso(nom, des, pre, doc) {
        this.nombre = nom;
        this.descripcion = des;
        this.precio = pre;
        this.docente = doc;
    }
    return Curso;
}());
exports.Curso = Curso;
var Docente = /** @class */ (function () {
    function Docente(nom, ape, co, pro, dir) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = co;
        this.profesion = pro;
        this.direccion = dir;
    }
    return Docente;
}());
exports.Docente = Docente;
var Estudiante = /** @class */ (function () {
    function Estudiante(nom, ape, co, dir) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = co;
        this.direccion = dir;
    }
    return Estudiante;
}());
exports.Estudiante = Estudiante;
var Direccion = /** @class */ (function () {
    function Direccion(ci, ba, ca) {
        this.cuidad = ci;
        this.barrio = ba;
        this.calle = ca;
    }
    return Direccion;
}());
exports.Direccion = Direccion;
var Compracurso = /** @class */ (function () {
    function Compracurso(cu, ba, fe) {
        this.curso = cu;
        this.estudiante = ba;
        this.fecha = fe;
    }
    return Compracurso;
}());
exports.Compracurso = Compracurso;
