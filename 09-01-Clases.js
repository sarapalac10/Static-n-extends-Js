class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let persona1 = new Persona("Juan", "Pérez");
console.log(persona1);

let persona2 = new Persona("Carlos","Muñoz");
console.log(persona2);


//Usar Get y Set con class
class Personas{
    constructor(nombre,apellido){ /*Esto es un método*/
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() { /*Esto es otro método*/
        return ("Dr." + this._nombre); 
    }

    set nombre(nombre) { /*Este es otro método*/ /*Es para modificar el valor de nombre*/
        this._nombre = nombre;
    }
}




let persona3 = new Personas("Felix", "Montoya");
persona3.nombre = "Esperancito"; /*Acá se llama el método set*/
console.log(persona3.nombre);

