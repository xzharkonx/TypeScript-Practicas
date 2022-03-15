
// Se comentan los console.log por que como se importan algunas
// variables o funciones de este archivo, a la hora de importar
// se reejecuta el archivo y se muestran los console.logs es por
// eso que los comentamos en este archivo al probar el siguiente
// tema de importaciones y exportaciones.

// console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

// Definición del Objeto Producto.
export interface Producto {
     desc: string;
     precio: number;
 }

 // Creamos unos Objetos de este tipo.
 const telefono: Producto = {
     desc: 'Nokia A1',
     precio: 150
 }

 const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
}

// Función para calcular el Impuesto Sobre la Venta.
// Mira que esta bien tipada, pero se pueden dejar muchos elementos sin tipar.
export function calculaISV( productos: Producto[] ): [number, number] {
// function calculaISV( productos: Producto[] ){

    // let total= 0;
    let total: number = 0;

    // Forma sin tipar.
    // productos.forEach( (producto) => {
        // total += precio;
    
    // Forma tipada.
    // productos.forEach( (producto: Producto ) => {
        // total += precio;

    // Forma destructurada.
    // productos.forEach( ({precio, desc}) => {
        // total += precio;
    
    // Forma destructurada y con argumentos renombrados.
    productos.forEach( ({precio: p, desc: d}) => {
        // total += precio;
        total += p;
    })

    // return total * 0.15;
    return  [total, total * 0.15];
}

const articulos = [ telefono, tableta ];
// const isv = calculaISV( articulos );
const [total, isv] = calculaISV( articulos );

// console. log('Total:', total);
// console. log('ISV:', isv);