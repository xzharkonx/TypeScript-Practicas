
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
        public direccion?: string
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

    ataque(): void {
        console.log(`Ataque de 15000 Pts`);
        return;
    }

}


// Creando atributos con el contructor en 1 línea.
// de esta forma ya no es necesario declararlos al
// inicio de la Clase.
class Hero extends PersonaNormal {

    // alterEgo: string;
    // edad: number;
    // nombreReal: number;

    constructor( 
        // También los pondemos poner opcionales.
        public nombreReal: string,
        public edad?: number,
        public alterEgo?: string,
        ){
            super( nombreReal, 'New York');
    }

}

class Guerrero {
    alterEgo: string;
    edad: number;
    nombreReal: number;
    pv: (string|number) = 50;
    ataque(): Personaje {
        console.log(`Ataque de 20 Pts`);
        return;
    }
    defensa = () => {console.log(`Fortalecimiento de defenza ${this.pv}`);}
}


// En una interfaz yo no puedo definir como debe funcionar un método.
// Pero si implementar los métodos de diferente manera según al Objeto que queramos.
interface Personaje {
    // Lo ponemos como opcional.
    alterEgo?: string;
    edad?: number;
    nombreReal?: number;
    ataque?: () => (void|string);

}

// Las interfaces no existen en JavaScript
// por lo que al compilarce es como si no existieran.

// Heroe no hereda de PersonaNormal, por lo tanto solo
// lleva 2 argumentos en el constructor.
const ironman = new Heroe('Ironman',35);
// const spiderman: Personaje = {}

// Hero hereda de Persona normal, por lo tanto
// en su constructor le pasa el nombre y sus
// argumentos son opcionales.

// Recuerda también declararlos en la interfaz
// como opcionales o si no envia valores por default.
const hero = new Hero('Luis Eduardo',29,'Hero');
console.log(ironman);
console.log(hero);