

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

// # Función con argumentos de tipo number
function sumarString(a: number, b: number){
    return a + b.toString();
}
// # Funciòn con argumentos de tipo number.
// También debe devolver estrictamente un dato númerico.
function sumarNum(a: number, b: number): number {
    return a + b;
}

// # Arrow Function
const sumarFlecha = (a: number, b: number): number => a + b;

// Función con un argumento opcional
// Así que primero van los obligatorios, luego los opcionales
// y por último los que tiene un valor default.
function multiplicar(numero: number, otroNumero?: number, base: number = 2): number{
    // return numero * base;
    otroNumero != null || otroNumero != undefined ?  base = otroNumero * base : base =  numero * base;
    return base;
}

const resultadoString = sumarString(10,20);
const resultadoNumber = sumarNum(10,20);
const resultadoFlecha = sumarFlecha(20,30);
// El primer argumento lo toma, pero el segundo se va al default.
// const resultadoMultiplicar = multiplicar(20,30); // 30*20=600
// El primer argumento lo toma, pero el segundo ponemos un valor default y
// al tercero ya caeria el valor pero sobreescribiendo el valor asignado.
const resultadoMultiplicar = multiplicar(20,0,10); // 0*10=0 | Otro caso (20,10): 10*20=200
console.log(resultadoString, resultadoNumber, resultadoFlecha, resultadoMultiplicar);

// == Funciones con Objetos como argumentos ==

// Funcion que no retorna nada
// function funcionVacia(): void {

    // Es opcional poner la siguiente línea cuando
    // no regresamos nada.
    // return undefined;
// }

// Definimos una interface para declarar un tipo de Objeto
interface PersonajeLOR {

    nombre: string;
    pv: number;
    // aumentarHP?: (n: number) => void; // Podemos definir esta función como Opcional.
    aumentarHP?: (n: number) => void | string; // Podemos definir que devuelva 2 tipos de datos.
    mostrarHP: () => void;
}

// Declaramos otro objeto de prueba
interface EnemigoLOR {
    nombre: string;
    pv: number;
    mostrarHP: () => void;
}

// Ejemplo de una función para curar un personaje.
// Necesitaremos definir cada argumento con un tipo especifico de dato.
// LA salida de esta función esta definida como vacia.
// function curar (personaje: PersonajeLOR , curarX: number): void {
function curar (personaje: PersonajeLOR | EnemigoLOR, curarX: number): void { // Con varios tipos de Objeto.
    
    personaje.pv += curarX;
    // console.log(personaje);
}

// Creamos un Objeto con TypeScript
// Al crear el Objeto (Con const para que sea constante y
// más optimizado para la memoria, recuerda que los atributos de
// los objetos si pueden cambiar).
const nuevoPersonaje: PersonajeLOR = {

    nombre: 'Luis',
    pv: 50,

    // aumentarHP(n: number){this.pv += n}, // Una sola línea, cosas específicas.
    // aumentarHP(n: number){ // Sin tipar.

    aumentarHP(n: number): void | string {

        if(this.pv === 100){return;}

        this.pv += n;
        console.log(`haz sanado: \"${n} pvs\"`);

        if(this.pv >100){
            console.log("Tus pv se han sanado.");
            this.pv=100;
        }
    },
    mostrarHP(){
        console.log('Puntos de vida: ', this.pv);
    }
}


const nuevoEnemigo: EnemigoLOR = {
    nombre: 'Warrior Black',
    pv: 80,
    // mostrarHP: () => { console.log('Puntos de vida: ${this.pv}')},
    mostrarHP(){
        console.log('Puntos de vida: ', this.pv);
    }
}

curar ( nuevoPersonaje, 30 );
curar ( nuevoEnemigo, 10 );

nuevoPersonaje.mostrarHP();
nuevoEnemigo.mostrarHP();

nuevoPersonaje.aumentarHP(30);
nuevoPersonaje.mostrarHP();