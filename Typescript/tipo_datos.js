var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// tipo datos
var nombre = 'kevin';
var numero = 1;
var Bool = true;
var objetoUsuario = {
    nombre: 'kevin'
};
// arreglos
var arregloUno = [];
var arregloDos = [];
// varios tipados
var nombreDos = 1;
var arregl1 = [];
var arreglo2 = [];
var variableLet;
var variableConts = 1;
// any
var cualquierVariable;
function sumar(num1, num2) {
    var a = 2;
    var b = 3;
    if (num1) {
        a = num1;
    }
    if (num2) {
        b = num2;
    }
    return a + b;
}
;
sumar(5, 5);
sumar(5);
sumar();
console.log(sumar(5, 5));
console.log(sumar(5));
console.log(sumar());
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    return Persona;
}());
var nnuevaPersona = new Persona();
var hijo = /** @class */ (function (_super) {
    __extends(hijo, _super);
    function hijo(nombre, apellido) {
        var _this = _super.call(this, nombre, apellido) || this;
        _this.nombre = nombre;
        _this.apellido = apellido;
        _this.apellido = apellido;
        return _this;
    }
    return hijo;
}(Persona));
var hijoPersona = new hijo('kevin', 'jimenez');
console.log(hijoPersona);
var Person = /** @class */ (function () {
    function Person(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    return Person;
}());
var alumno = /** @class */ (function (_super) {
    __extends(alumno, _super);
    function alumno(nombre, apellido) {
        var _this = _super.call(this, nombre, apellido) || this;
        _this.nombre = nombre;
        _this.apellido = apellido;
        return _this;
    }
    Object.defineProperty(alumno.prototype, "setNombre", {
        set: function (nombre) {
            this.nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(alumno.prototype, "setApellido", {
        set: function (apellido) {
            this.apellido = apellido;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(alumno.prototype, "getNombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(alumno.prototype, "getApellido", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    return alumno;
}(Person));
var alumnoNuevo = new alumno();
alumnoNuevo.setNombre('kevin');
alumnoNuevo.setApellido('');
alumnoNuevo.getApellido();
