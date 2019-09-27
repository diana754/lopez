export class Curso {
    private nombre: string;
    private descripcion: string;
    private precio: number;
    private docente: Docente;
    public constructor(nom: string, des: string, pre: number,doc: Docente){
        this.nombre = nom;
        this.descripcion= des;
        this.precio= pre;
        this.docente= doc;
    }
}
export class Docente {
    private nombre: string;
    private apellido: string;
    private correo: string;
    private profesion: string;
    private direccion: Direccion ;
    public constructor(nom: string, ape: string, co: string, pro: string, dir: Direccion) {
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
    public constructor(nom: string, ape: string, co: string, dir:Direccion[]) {
        this.nombre = nom;
        this.apellido = ape;
        this.correo = co;
        this.direccion = dir;
    }
}
export class Direccion {
    private cuidad: string;
    private barrio: string;
    private calle: string;
    public constructor(ci: string, ba: string, ca: string) {
        this.cuidad = ci;
        this.barrio = ba;
        this.calle = ca;
    }
}
export class Compracurso {
    private curso: Curso;
    private estudiante: Estudiante;
    private fecha: string;
    public constructor(cu: Curso, ba: Estudiante, fe: string) {
        this.curso = cu;
        this.estudiante = ba;
        this.fecha = fe;
    }
}
    