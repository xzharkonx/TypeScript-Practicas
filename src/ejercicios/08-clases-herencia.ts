
console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

// -= Clases =-
// class Heroe {
//     private alterEgo: string;
//     public edad: number;
//     static nombreReal: number;
//      constructor () {
//          this.alterEgo = "";
//      }

// }

// Forma clásica 
// class PersonaNormal {
//     nombre: string;
//     direccion: string;
    
//     constructor( nombre: string, direccion: string ){
//         this.nombre = nombre;
//         this.direccion = direccion; 
//     }
// }

// Forma moderna para inyección de dependencias.
class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
       ) {}
}

// Las clases nos sirven para crear las instancias.
class Heroe {

    alterEgo: string;
    edad: number;
    nombreReal: number;

    constructor( alterEgo: string, edad: number ) {
        this.alterEgo = alterEgo;
        this.edad = edad; 
    }

    ataque(): Personaje {
        console.log(`Ataque de 15000 Pts`);
        return;
    }

}


// Creando atributos con el contructor en 1 línea.
class Hero extends PersonaNormal {

    // alterEgo: string;
    // edad: number;
    // nombreReal: number;

    constructor( 
        // También los pondemos poner opcionales.
        public alterEgo?: string,
        public edad?: number,
        public nombreReal?: string,
        ){
            super( nombreReal, 'New York');
    }

}

class Guerrero {
    alterEgo: string;
    edad: number;
    nombreReal: number;
    ataque(): Personaje {
        console.log(`Ataque de 2000 Pts`);
        return;
    }
}


// En una interfaz yo no puedo definir como debe funcionar un método.
// Pero si implementar los métodos de diferente manera según al Objeto que queramos.
interface Personaje {
    // Lo ponemos como opcional.
    alterEgo?: string;
    edad?: number;
    nombreReal?: number;
    ataque?: () => void;

}

// Las interfaces no existen en JavaScript
// por lo que al compilarce es como si no existieran.

const ironman = new Heroe('Ironman',35);
// const spiderman: Personaje = {}
const hero = new Hero('Hero',29,'Luis Eduardo');
console.log(ironman);
console.log(hero);