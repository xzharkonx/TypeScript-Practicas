

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

// Funciòn con argumentos de tipo number
function sumarString(a: number, b: number){
    return a + b.toString();
}
// Funciòn con argumentos de tipo number.
// También debe devolver estrictamente un dato númerico.
function sumarNum(a: number, b: number): number {
    return a + b;
}

// Arrow Function
const sumarFlecha = (a: number, b: number): number => a + b;

// Para hacer un argumento opcional
// Así que primero van los obligatorios, luego los opcionales
// y por último los que tiene un valor default.
function multiplicar(numero: number, otroNumero?: number, base: number = 2): number{
    return numero * base;
}

const resultadoString = sumarString(10,20);
const resultadoNumber = sumarNum(10,20);
const resultadoFlecha = sumarFlecha(20,30);
// El primer argumento lo toma, pero el segundo se va al default.
// const resultadoMultiplicar = multiplicar(20,30); 
// El primer argumento lo toma, pero el segundo ponemos un valor default y
// al tercero ya caeria el valor pero sobreescribiendo el valor asignado.
const resultadoMultiplicar = multiplicar(20,0,10);
console.log(resultadoString, resultadoNumber, resultadoFlecha, resultadoMultiplicar);



