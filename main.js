// 1 

/*
let numero = parseInt(prompt("Ingrese un número:"));

console.log("Tabla de multiplicar del " + numero + ":");
for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}
*/

// 2
/*
let numero;
let suma = 0;

do {
    numero = parseFloat(prompt("Ingrese un número (ingrese 0 para terminar):"));
    if (numero !== 0) {
        suma += numero;
    }
} while (numero !== 0);

console.log("La suma acumulada de los números ingresados es: " + suma);
*/

//3

/*
let numeroSecreto = 42; 
let intentos = 0;
let numeroIngresado;

do {
    numeroIngresado = parseInt(prompt("Adivina el número (entre 1 y 100):"));
    intentos++;

    if (numeroIngresado < numeroSecreto) {
        console.log("El número ingresado es menor. Vuelve a intentarlo.");
    } else if (numeroIngresado > numeroSecreto) {
        console.log("El número ingresado es mayor. Vuelve a intentarlo.");
    }
} while (numeroIngresado !== numeroSecreto);

console.log("¡Felicitaciones! Has adivinado el número en " + intentos + " intentos.");
*/


//4

/*
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.floor(numero / 2); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

let numero = parseInt(prompt("Ingrese un número:"));

if (esPrimo(numero)) {
    console.log(numero + " es un número primo.");
} else {
    console.log(numero + " no es un número primo.");
}
*/

//5
/*
let numero = parseInt(prompt("Ingrese un número:"));

let divisores = [];

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        divisores.push(i);
    }
}

console.log("Los divisores de " + numero + " son: " + divisores.join(', '));
*/


//6
/*
let array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

for (let i = 0; i < array.length; i++) {
    console.log("Elemento " + (i + 1) + ": " + array[i]);
}
*/

//7

/*
let array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

for (let i = 0; i < array.length; i++) {
    console.log("El doble del elemento " + (i + 1) + " (" + array[i] + ") es: " + (array[i] * 2));
}
*/

//8
/*
let familia = [
    { nombre: "Juan", edad: 45, ocupacion: "Ingeniero", ciudad: "Madrid" },
    { nombre: "Ana", edad: 42, ocupacion: "Médica", ciudad: "Barcelona" },
    { nombre: "Carlos", edad: 20, ocupacion: "Estudiante", ciudad: "Valencia" },
    { nombre: "Luisa", edad: 17, ocupacion: "Estudiante", ciudad: "Sevilla" },
    { nombre: "Pedro", edad: 70, ocupacion: "Jubilado", ciudad: "Bilbao" }
];

for (let i = 0; i < familia.length; i++) {
    let persona = familia[i];
    console.log("Hola, mi nombre es " + persona.nombre + ". Tengo " + persona.edad + " años, soy " + persona.ocupacion + " y vivo en " + persona.ciudad + ".");
}
*/

//9

/*
let array = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        console.log("Número impar: " + array[i]);
    }
}
*/


//10

/*
let sumaPares = 0;
let sumaImpares = 0;
let numero;

do {
    numero = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"));
    
    if (numero !== 0) { 
        if (numero % 2 === 0) {
            sumaPares += numero;
        } else {
            sumaImpares += numero; 
        }
    }
} while (numero !== 0);

console.log("La suma de los números pares es: " + sumaPares);
console.log("La suma de los números impares es: " + sumaImpares);
*/



//11

/*
let array = [12, 45, 78, 23, 56, 89, 34, 67, 90, 21];

let numeroMasGrande = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] > numeroMasGrande) {
        numeroMasGrande = array[i]; 
    }
}

console.log("El número más grande es: " + numeroMasGrande);
*/


//12

/*
let array = [23, 56, 12, 89, 34, 78, 45, 21, 90, 67];

let numeroMasChico = array[0]; 

for (let i = 1; i < array.length; i++) {
    if (array[i] < numeroMasChico) {
        numeroMasChico = array[i];
    }
}

console.log("El número más chico es: " + numeroMasChico);
*/

//13

/*
let jugador1 = prompt("Ingrese el nombre del primer jugador:");
let jugador2 = prompt("Ingrese el nombre del segundo jugador:");

function determinarGanador(eleccion1, eleccion2) {
    if (eleccion1 === eleccion2) {
        return "Empate";
    } else if (
        (eleccion1 === "piedra" && eleccion2 === "tijeras") ||
        (eleccion1 === "tijeras" && eleccion2 === "papel") ||
        (eleccion1 === "papel" && eleccion2 === "piedra")
    ) {
        return jugador1;
    } else {
        return jugador2;
    }
}

let resultado;
do {
    let eleccion1 = prompt(jugador1 + ", ingresa tu elección (piedra, papel, tijeras):").toLowerCase();
    let eleccion2 = prompt(jugador2 + ", ingresa tu elección (piedra, papel, tijeras):").toLowerCase();

    resultado = determinarGanador(eleccion1, eleccion2);

    if (resultado === "Empate") {
        console.log("Empate. Vuelve a intentarlo.");
    } else {
        console.log("El ganador es: " + resultado);
    }
} while (resultado === "Empate");
*/

//14

/*
const filas = 5;

for (let i = 1; i <= filas; i++) {
    let linea = ""; 

    for (let j = 1; j <= i; j++) {
        linea += "*";
    }

    console.log(linea);
}
*/

//15

/*
const filas = 5;

for (let i = filas; i >= 1; i--) {
    let linea = ""; 

    for (let j = 1; j <= i; j++) {
        linea += "*";
    }

    console.log(linea);
}
*/

//16
/*
let array = [34, 7, 23, 32, 5, 62, 19, 40, 51, 28];

for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log("Array ordenado:", array);
*/