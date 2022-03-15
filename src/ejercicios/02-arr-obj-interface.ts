

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/


// # Arreglos.

// TypeScript interpreta automaticamente si nuestro
// arreglo es solo de un tipo de dato.
// let habilidades = ['Bash', 'Counter', 'Healing'];
// habilidades.push("push");

// O bien si tienes otro tipo de dato, también interpretará
// que puede aceptar de ese otro tipo de dato.
// let habilidades = ['Bash', 'Counter', 'Healing', 10];
// habilidades.push(1);

// Si ocuparamos strings, números y booleanos sería 
// de la siguiente forma. 
// Recuerda que es un arreglo por lo que lleva [] al final.
let habilidades: (boolean | string |number)[] = ['Bash', 'Counter', 'Healing', 10];
habilidades.push(1);
habilidades.push(true);

// Que solo soporte strings
let habilidadesString: string[] = ["hola", "mundo"];
habilidadesString.push('Luis')


// # Objetos.

// De esta forma creamos un Objeto donde no le importará
// que se le añada una propiedad despues de ser creado.
// O el tipo de sus atributos.
// const personaje: any = {
//     nombre: 'Luis',
//     hp: 100,
//     habilidades: ['Bash', 'Counter', 'Healling']
// }

// personaje.puebloNatal = 'Pueblo Paleta';

// Para hacer nuestros atributos de un tipo estricto haremos
// uso de las interfaces.
// Servira como para definir un tipo de Objeto.

interface Personaje {
    nombre: string;
    hp: number;
    // habilidades: string[];
    habilidades: (string[] | number[] | string | boolean[] | boolean);
    puebloNatal?: string;
}

// Significado de: ?
// Posteriormente un Objeto heredará la configuración
// Pero se quejará si le añadimos un atributo despues de haberlo creado,
// para ello en la definición de la interfaz utilizamos
// un signo de interrogación ? para indicar que es opcional.

const personaje: Personaje = {
    nombre: 'Luis',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healling']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);

