

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

// -== Destructuración de Objetos ==-

// Usualmente es mejor iniciar construyendo
// la interface por que esto nos da la idea
// de como van a lucir los Objetos.
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
} 

// Destructuramos los Objetos
// Mira que detalles es un objeto dentro de este.
const { volumen, segundo, cancion, detalles} = reproductor;
// console.log(detalles.autor);
const {autor, anio} = detalles;
// console.log(autor);

// 2da Forma de destructurar los Detalles.
// Pero se ve más engorroso aunque más comprimido.
// const { volumen, segundo, cancion, detalles: {anio, autor}} = reproductor;
// También le podemos dar un nombre de variable default a esa variable destructurada.
// Solo colocamos delante de ella la variable que queremos que tome ese valor.
const { volumen: v, segundo: s, cancion: c, detalles: {anio: fecha, autor: responsable}} = reproductor;


// Mostrando los atributos del Objeto en variables destructuradas.
console.log(`El volumen actual es de: ${volumen}`);
console.log(`El segundo actual es de: ${segundo}`);
console.log(`El canción actual es de: ${cancion}`);
console.log(`El autor es: ${autor}`);

// Así no chocaremos con algunas otras variables que ya tengamos declaradas
console.log(`El autor responsable es: ${responsable}`);


// -= Destructuración de Arreglos =-

const dbz: string[] = ['Gku', 'Vegeta', 'Trunks'];
console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', dbz[2]);

// Destrucutramos el arreglo.
const [Goku, Vegeta, Trunks] = dbz;
// Así dejamos uno en blanco para saltar esa posición.
const [p1, , p3] = dbz;

console.log('Personaje 1: ', Goku);
console.log('Personaje 2: ', Vegeta);
console.log('Personaje 3: ', Trunks);
