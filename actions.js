







class Persona{
    constructor(nombre, fechaNacimiento, tieneHijos) {
    this.nombre = nombre; // string
    this.fechaNacimiento = new Date(fechaNacimiento); // Date
    this.tieneHijos = tieneHijos; //boolean
 }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }

}
const persona1 = new Persona('Juan',30);
persona1.saludar();


