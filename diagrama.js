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
var direccion1 = new Direccion('La Paz', 'las cuadras', '9 de abril');
console.log(direccion1);
var direccion2 = new Direccion('santa cruz', 'barrio chino', 'republica');
console.log(direccion2);
var direccion3 = new Direccion('cochabamba', 'cancha', 'punata');
console.log(direccion3);
var direccion4 = new Direccion('cochabamba', 'solterito', 'RubenDario');
console.log(direccion4);
var direccion5 = new Direccion('beni', 'españa', 'papapaulo');
console.log(direccion5);
var direccion6 = new Direccion('tarija', 'rio rocha', 'sacaba');
console.log(direccion6);
var estudiante1 = new Estudiante('pablo', 'lopez', 'lagorda3@gmail.com', [direccion1]);
console.log(estudiante1);
var estudiante2 = new Estudiante('esmeralda', 'ramirez', 'perrofiel@gmail.com', [direccion2]);
console.log(estudiante2);
var estudiante3 = new Estudiante('tatiana', 'pedro', 'estudia2@gmail.com', [direccion3]);
console.log(estudiante3);
var estudiante4 = new Estudiante('carlos', 'patzi', 'sabanashumedas1@gmail.com', [direccion4]);
console.log(estudiante4);
var estudiante5 = new Estudiante('eliana', 'torrez', 'angelsabioxd@gmail.com', [direccion5]);
console.log(estudiante5);
var estudiante6 = new Estudiante('angel', 'miranda', 'terezapu3@gmail.com', [direccion6]);
console.log(estudiante6);
var estudiante7 = new Estudiante('luis', 'ozuna', 'grande1pe@gmail.com', [direccion1]);
console.log(estudiante7);
var estudiante8 = new Estudiante('lily', 'soliz', 'trabajandoduro2@gmail.com', [direccion2]);
console.log(estudiante8);
var estudiante9 = new Estudiante('nicol', 'silvestre', 'tentacionrica3@gmail.com', [direccion3]);
console.log(estudiante9);
var estudiante10 = new Estudiante('juan', 'madarin', 'alexcabron@gmail.com', [direccion4]);
console.log(estudiante10);
var docente1 = new Docente('Javier', 'Gonzales', 'Javier3@gmail.com', 'licenciado de literatura', [direccion1, direccion3]);
console.log(docente1);
var docente2 = new Docente('Ana', 'Perez', 'Anabel@gmail.com', 'licenciada de aritmetica', [direccion2, direccion5]);
console.log(docente2);
var curso1 = new Curso('gramatica', 'lenguaje', 500, [docente1]);
console.log(curso1);
var curso2 = new Curso('matematica', 'curso de aritmetica', 300, [docente2]);
console.log(curso2);
var curso3 = new Curso('musica', 'clases de musica', 500, [docente2]);
console.log(curso3);
var curso4 = new Curso('cchef', 'cocina', 300, [docente1]);
console.log(curso4);
var curso5 = new Curso('turista', 'clases de turista', 500, [docente2]);
console.log(curso5);
var compracurso1 = new Compracurso(curso1, estudiante1, '27 de agosto');
console.log(compracurso1);
var compracurso2 = new Compracurso(curso2, estudiante2, '27 de agosto');
console.log(compracurso2);
var compracurso3 = new Compracurso(curso3, estudiante3, '27 de agosto');
console.log(compracurso3);
var compracurso4 = new Compracurso(curso4, estudiante4, '27 de agosto');
console.log(compracurso4);
var compracurso5 = new Compracurso(curso5, estudiante5, '27 de agosto');
console.log(compracurso5);
var compracurso6 = new Compracurso(curso1, estudiante6, '27 de agosto');
console.log(compracurso6);
var compracurso7 = new Compracurso(curso2, estudiante6, '27 de agosto');
console.log(compracurso7);
var compracurso8 = new Compracurso(curso3, estudiante7, '27 de agosto');
console.log(compracurso8);
var compracurso9 = new Compracurso(curso4, estudiante8, '27 de agosto');
console.log(compracurso9);
var compracurso10 = new Compracurso(curso5, estudiante9, '27 de agosto');
console.log(compracurso10);
var compracurso11 = new Compracurso(curso5, estudiante10, '27 de agosto');
console.log(compracurso11);
var compracurso12 = new Compracurso(curso1, estudiante5, '27 de agosto');
console.log(compracurso12);
