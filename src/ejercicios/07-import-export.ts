import { calculaISV, Producto } from "./06-desestructuracion-fn-argumentos";


console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

// -= Imports y Exports =-

// Mira que no hace falta la extensión .ts al final del path de la importación.

// Se importa el tipo de dato para esta variable.
const carritoCompras: Producto[] = [

    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    }
];

const [total, isv] = calculaISV( carritoCompras );
console. log( 'Total', total );
console. log( 'ISV', isv )