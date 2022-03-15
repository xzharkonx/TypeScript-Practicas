

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

let nombre: string = 'Luis';
// Le cambiamos el nombre pero solo por el mismo tipo de dato.
nombre = 'Eduardo';
// Si le ponemos otro tupo de dato TypeScript se quejará.
// nombre = 23;

// Indicamos que el tipo de dato que puede recibir es númerico.
// let hp: number = 95;
// Indicamos que otro tipo de dato puede recibir.
let hp: number | string = 95;
hp = 'FULL';

let estaVivo: boolean = true;

console.log(nombre, hp);

