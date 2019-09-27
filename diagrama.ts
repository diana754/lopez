export class Curso {
    private nombre: string;
    private descripcion: string;
    private precio: number;
    private docente: Docente[];
    public constructor(nom: string, des: string, pre: number,doc: Docente[]){
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
    private direccion: Direccion[] ;
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
    public constructor(nom: string, ape: string, co: string, dir:Direccion[]) {
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
    