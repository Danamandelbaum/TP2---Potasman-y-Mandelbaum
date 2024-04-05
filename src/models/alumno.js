export default class Alumno {
    constructor(username = "", dni = "") { 
        this.username = username;
        this.dni = dni;
    }
    
    toString() {
        return `Nombre: ${this.username}, DNI: ${this.dni}`;
    }
}
 
