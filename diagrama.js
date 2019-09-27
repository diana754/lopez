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
    function Direccion(ciudad, barrio, calle) {
        this.ciudad = ciudad;
        this.barrio = barrio;
        this.calle = calle;
    }
    return Direccion;
}());
exports.Direccion = Direccion;
var Compracurso = /** @class */ (function () {
    function Compracurso(curso, estudiante, fecha) {
        this.curso = curso;
        this.estudiante = estudiante;
        this.fecha = fecha;
    }
    return Compracurso;
}());
exports.Compracurso = Compracurso;
