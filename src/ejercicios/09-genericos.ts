
console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

// El genérico detalla el tipo de valor que se devolvera
// también nosotros podemos especificarlo.
// pero eso es lo más importante.
function queTipoSoy<T>(argumento: T) {
    return argumento;
}
let soyString = queTipoSoy('Hola Mundo');
let soyNumbero = queTipoSoy( 100 );
let soyArreglo = queTipoSoy( [1,2,3,4,5,6,7,8,9,10] ); 

let soyExplicito = queTipoSoy<number>( 100 ); 