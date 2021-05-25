class Persona{

    static contadorPersona = 0;

    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersona;
    }
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    nombreCompleto(){
        return (this._idPersona + '. '+ this._nombre + ' ' + this._apellido + '. Edad: ' + this._edad + ' años');
    }

    toString() {
        return this.nombreCompleto();
    }
}

let persona1 = new Persona('Sebastián', 'Gómez', 30)
console.log(persona1);
console.log(persona1.toString());

class Empleado extends Persona{
    constructor(nombre, apellido, edad, sueldo){
    super (nombre, apellido, edad);                      
    this._sueldo = sueldo ;
    }

    get sueldo() {
        return this._sueldo;
    }

    set sueldo (sueldo) {
        this._sueldo = sueldo;
    }

    nombreCompleto(){
        return (super.nombreCompleto() + ', salario: US$' + this._sueldo);
    }
}

let empleado1 = new Empleado('Andrés', 'Jaramillo', 45, 4000);

console.log(empleado1);
console.log(empleado1.toString());

class Cliente extends Persona{
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre,apellido, edad)
        this._fechaRegistro = fechaRegistro;
    }
     get fechaRegistro(){
        return (new Date());
     }

     set fechaRegistro(fechaRegistro){
         this._fechaRegistro= fechaRegistro;
     }
    
    nombreCompleto(){
        return (super.nombreCompleto() +'. Registrado el día: '+ this._fechaRegistro);
    }
} 

let cliente1 = new Cliente('Javier','Méndez', 50, new Date());
console.log(cliente1._fechaRegistro);


console.log(cliente1);
console.log(cliente1.toString());

const date1 = Date();
console.log(date1);
