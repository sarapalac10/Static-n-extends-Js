class Persona{ 

    static contadorPersona = 0 ; /*Atributo de esta clase*/

    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.idPersona= ++Persona.contadorPersona; /*Declarar esta variable acá mismo*/
    }
    get nombre() { 
        return (this._nombre); 
    }

    set nombre(nombre) { 
        this._nombre = nombre;
    }
    get apellido() { 
        return (this._apellido); 
    }

    set apellido(apellido) { 
        this._apellido = apellido;
    }

    nombreCompleto(){
        return (this.idPersona + ' ' + this._nombre +' ' + this._apellido);
    }
    toString(){ /*Sobreescribimo el método de PADRE (Object) y a la vez polimorfismo*/
        return this.nombreCompleto();
    }
//Agregando STATIC//
    static saludar(){
        console.log("Saludos putitos, método static");
    }

    static saludar1(persona){
        console.log(persona.nombre);
    }
}

class Empleado extends Persona{  /*Esta es la clase HIJA*/
    constructor(nombre, apellido, departamento){
        super(nombre, apellido) /*Llamar al constructor de PADRE*/
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

    //Agregar sobreescritura//
    nombreCompleto(){
       // return (this._nombre +' ' + this._apellido + ', del dpto de: '+ this._departamento); Estructura de como sería sin sobreescritura//
       return (super.nombreCompleto() + ', de: ' + this._departamento);
    }

}

let persona1 = new Persona('Jacinto', 'Fernandez');
console.log(persona1.toString());


let empleado1 = new Empleado('Fernando','Jiménez','Sistemas');
console.log(empleado1.toString());

console.log(Persona.contadorPersona);

let persona2 = new Persona("Roberto","Duque");

console.log(persona2.toString());

console.log(Persona.contadorPersona);

