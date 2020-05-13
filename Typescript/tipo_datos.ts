// tipo datos
const nombre: string = 'kevin';
const numero: number = 1;
const Bool: boolean = true;
const objetoUsuario: object = {
    nombre: 'kevin',
}

// arreglos
const arregloUno: Array<boolean> = [];
const arregloDos: string[] = [];
// varios tipados

const nombreDos: (string | number) = 1;
const arregl1: Array<boolean | number> = [];
const arreglo2: (string | object)[] = [];


let variableLet: number;
const variableConts: number = 1;
// any
let cualquierVariable: any

function sumar(num1?: number, num2?: number): number {
    let a = 2;
    let b = 3;

    if (num1) {
        a = num1;
    }
    if (num2) {
        b = num2
    }

    return a + b;
};

sumar(5, 5);
sumar(5);
sumar();
console.log(sumar(5, 5));
console.log(sumar(5));
console.log(sumar());

class Persona {
    constructor(
        protected nombre?: string,
        public apellido?: string
    ) {

    }
}

const nnuevaPersona = new Persona()

class hijo extends Persona {
    constructor(
        protected nombre: string,
        public apellido: string,
    ) {
        super(nombre, apellido);
        this.apellido = apellido;
    }
}

const hijoPersona = new hijo('kevin', 'jimenez');
console.log(hijoPersona);

class Person {
    constructor(
        protected nombre?: string,
        protected apellido?: string
    ) { }
}

class alumno extends Person {
    constructor(
        protected nombre?: string,
        protected apellido?: string
    ) {
        super(nombre, apellido);
    }

    set setNombre(nombre: string | any) {
        this.nombre = nombre;
    }
    set setApellido(apellido: string | any) {
        this.apellido = apellido;
    }

    get getNombre(): string | any {
        return this.nombre
    }
    get getApellido(): string | any {
        return this.nombre
    }
}
const alumnoNuevo: alumno = new alumno();
alumnoNuevo.setNombre('kevin');
alumnoNuevo.setApellido('');
alumnoNuevo.getApellido();

