

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

// -= Encadedamiento Opcional =-

interface Pasajero {
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia','Gabriel']
}

function imprimeHijos( pasajero: Pasajero ): void {

    // const cuantosHijos = pasajero.hijos.length;
    // Con el signo ? delante de hijos: hijos? le indicamos
    // que intente evaluar si hijos tiene un valor, entonces
    // haz lo que sigue
    const cuantosHijos = pasajero.hijos?.length || 0;
    console. log( "Tiene: " + cuantosHijos + " hijos." );

}
// Para este Objeto si podemos porque este si tiene
// valores en su array de hijos.
imprimeHijos ( pasajero2 );
// Este nos va a tirar error por que no puede ser leida
// la propiedad length, por que busca la propiedad de 
// hijos y trae undefined.
// imprimeHijos ( pasajero1 );

// Esto pasaria si no se evalua primero poniedo 
// delante de la propiedad hijos el signo de ?.
// Una vez aplicado ahora en vez de que truene nos mandará udefined.
// O bien si le encadenamos un valor con || entonces nos devolvera eso.
imprimeHijos ( pasajero1 );