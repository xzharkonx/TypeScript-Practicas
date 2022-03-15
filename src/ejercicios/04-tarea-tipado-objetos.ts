

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: string;
    edad: number;
    // Se pueden agregar así pero se anidaria
    // y no sería lo correcto.
    // direccion: {
    //     calle: string;
    //     pais: string;
    //     ciudad: string;
    // };
    // Así que para esto mejor se implementa otra interfaz
    direccion: Direccion;
    mostrarDireccion: () => string;

}

interface Direccion {

    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    // mostrarDireccion(){ // SIn tipar.
    mostrarDireccion(): string{
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);