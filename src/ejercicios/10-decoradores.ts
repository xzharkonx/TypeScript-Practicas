

console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/

// -= Decoradores =-

// Es una caracteristica propia de TypeScript
// Documentación: https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators

// Sirven para cambiar las Clases en el momento en que son definidas.
// En el momento en que que este compilandolo o traduciendolo a otra cosa,
// entonces va a extender internamente esas nuevas funcionalidades que
// nosotros estamos queriendo implementar.

// Angular lo usa bastante para cambiar las cosas.

// Agregamos una función para decorar nuestra clase
// Recuerda ir al archivo tsconfig.json y descomentar
// "experimentalDecorators": true,  para que no nos salga un error.
function classDecorator<T extends { new (...args: any []): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
  };
}

// También veremos que casi todo es una Clase.
// Lo que veremos que si cambia es el decorador.
// dependiendo de lo que estemos usando.

// Este decorador trabaja a un nivel antes que la creación de una nueva instancia.
// Los decoradores sirven para añadir o expadir funcionalidades.
// Angular los utiliza para diferenciar diferentes componentes. 
// Si una Clase es un Pipe, o si es una Directiva o etc.
// Entonces ahora podemos identificar si una Clase es un componente o un Servicio etc.

@classDecorator
class MiSuperClase {

    public miPropiedad: string = 'ABC123';

     imprimir() {
          console. log('Hola Mundo');
     }
}

console.log(MiSuperClase);

// Mira que esta información ya aparece
// cuando se crean las instancias.
const miclase = new MiSuperClase();
console. log( miclase.miPropiedad );

// Mira que aún así lee la propiedad agregada.
// Aun que nos marque error aquí, mostrará la info
// como si estuviera agregada.
// console.log( miclase.newProperty );