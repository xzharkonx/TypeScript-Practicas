

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

// -= Desing Patterns - Singleton =-
// El patrón Singleton sirve para tener una única instancia
// de una Clase en concreto.

class Singleton {

    private name?: string;
    private static instance: Singleton;

    private constructor(name?: string){
        this.name = name || "Singleton";
    }

    public static getInstance(name?: string): Singleton {
        if(!Singleton.instance){
            Singleton.instance = new Singleton(name);
        }
        return Singleton.instance;
    }

}

// Mira como en el primero si crea la instancia.
const singleton: Singleton = Singleton.getInstance("PruebaSingleton");
// Cuando volvemos a hacer la instancia ya no considera el nuevo valor.
const clon: Singleton = Singleton.getInstance("Clon");

console.log(singleton);
console.log(clon);