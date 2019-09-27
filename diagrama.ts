export class Curso {
    private nombre: string;
    private descripcion: string;
    private precio: number;
    private docente: Docente[];
    public constructor(nom: string, des: string, pre: number, doc: Docente[]) {
        this.nombre = nom;
        this.descripcion = des;
        this.precio = pre;
        this.docente = doc;
    }
}
export class Docente {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private profesion: string;
    private direccion: Direccion[];
    public constructor(nom: string, ape: string, co: string, pro: string, dir: Direccion[]) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = co;
        this.profesion = pro;
        this.direccion = dir;
    }
}
export class Estudiante {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private direccion: Direccion[];
    public constructor(nom: string, ape: string, co: string, dir: Direccion[]) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = co;
        this.direccion = dir;
    }
}
export class Direccion {
    private ciudad: string;
    private barrio: string;
    private calle: string;
    public constructor(ciudad: string, barrio: string, calle: string) {
        this.ciudad = ciudad;
        this.barrio = barrio;
        this.calle = calle;
    }
}
export class Compracurso {
    private curso: Curso;
    private estudiante: Estudiante;
    private fecha: string;
    public constructor(curso: Curso, estudiante: Estudiante, fecha: string) {
        this.curso = curso;
        this.estudiante = estudiante;
        this.fecha = fecha;
    }
}
let direccion1: Direccion = new Direccion('La Paz', 'las cuadras', '9 de abril');
console.log(direccion1);
let direccion2: Direccion = new Direccion('santa cruz', 'barrio chino', 'republica');
console.log(direccion2);
let direccion3: Direccion = new Direccion('cochabamba', 'cancha', 'punata');
console.log(direccion3);
let direccion4: Direccion = new Direccion('cochabamba', 'solterito', 'RubenDario');
console.log(direccion4);
let direccion5: Direccion = new Direccion('beni', 'españa', 'papapaulo');
console.log(direccion5);
let direccion6: Direccion = new Direccion('tarija', 'rio rocha', 'sacaba');
console.log(direccion6);

let estudiante1: Estudiante = new Estudiante('pablo', 'lopez', 'lagorda3@gmail.com', [direccion1]);
console.log(estudiante1);
let estudiante2: Estudiante = new Estudiante('esmeralda', 'ramirez', 'perrofiel@gmail.com', [direccion2]);
console.log(estudiante2);
let estudiante3: Estudiante = new Estudiante('tatiana', 'pedro', 'estudia2@gmail.com', [direccion3]);
console.log(estudiante3);
let estudiante4: Estudiante = new Estudiante('carlos', 'patzi', 'sabanashumedas1@gmail.com', [direccion4]);
console.log(estudiante4);
let estudiante5: Estudiante = new Estudiante('eliana', 'torrez', 'angelsabioxd@gmail.com', [direccion5]);
console.log(estudiante5);
let estudiante6: Estudiante = new Estudiante('angel', 'miranda', 'terezapu3@gmail.com', [direccion6]);
console.log(estudiante6);
let estudiante7: Estudiante = new Estudiante('luis', 'ozuna', 'grande1pe@gmail.com', [direccion1]);
console.log(estudiante7);
let estudiante8: Estudiante = new Estudiante('lily', 'soliz', 'trabajandoduro2@gmail.com', [direccion2]);
console.log(estudiante8);
let estudiante9: Estudiante = new Estudiante('nicol', 'silvestre', 'tentacionrica3@gmail.com', [direccion3]);
console.log(estudiante9);
let estudiante10: Estudiante = new Estudiante('juan', 'madarin', 'alexcabron@gmail.com', [direccion4]);
console.log(estudiante10);

let docente1: Docente = new Docente('Javier', 'Gonzales', 'Javier3@gmail.com', 'licenciado de literatura', [direccion1, direccion3]);
console.log(docente1);
let docente2: Docente = new Docente('Ana', 'Perez', 'Anabel@gmail.com', 'licenciada de aritmetica', [direccion2, direccion5]);
console.log(docente2);

let curso1: Curso = new Curso('gramatica', 'lenguaje', 500, [docente1]);
console.log(curso1);
let curso2: Curso = new Curso('matematica', 'curso de aritmetica', 300, [docente2]);
console.log(curso2);
let curso3: Curso = new Curso('musica', 'clases de musica', 500, [docente2]);
console.log(curso3);
let curso4: Curso = new Curso('cchef', 'cocina', 300, [docente1]);
console.log(curso4);
let curso5: Curso = new Curso('turista', 'clases de turista', 500, [docente2]);
console.log(curso5);

let compracurso1: Compracurso = new Compracurso(curso1, estudiante1, '27 de agosto');
console.log(compracurso1);
let compracurso2: Compracurso = new Compracurso(curso2, estudiante2, '27 de agosto');
console.log(compracurso2);
let compracurso3: Compracurso = new Compracurso(curso3, estudiante3, '27 de agosto');
console.log(compracurso3);
let compracurso4: Compracurso = new Compracurso(curso4, estudiante4, '27 de agosto');
console.log(compracurso4);
let compracurso5: Compracurso = new Compracurso(curso5, estudiante5, '27 de agosto');
console.log(compracurso5);
let compracurso6: Compracurso = new Compracurso(curso1, estudiante6, '27 de agosto');
console.log(compracurso6);
let compracurso7: Compracurso = new Compracurso(curso2, estudiante6, '27 de agosto');
console.log(compracurso7);
let compracurso8: Compracurso = new Compracurso(curso3, estudiante7, '27 de agosto');
console.log(compracurso8);
let compracurso9: Compracurso = new Compracurso(curso4, estudiante8, '27 de agosto');
console.log(compracurso9);
let compracurso10: Compracurso = new Compracurso(curso5, estudiante9, '27 de agosto');
console.log(compracurso10);
let compracurso11: Compracurso = new Compracurso(curso5, estudiante10, '27 de agosto');
console.log(compracurso11);
let compracurso12: Compracurso = new Compracurso(curso1, estudiante5, '27 de agosto');
console.log(compracurso12);

