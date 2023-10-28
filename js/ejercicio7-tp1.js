/* 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande
*/

let numero1 = parseInt(prompt("Ingrese el primer número: "));
let numero2 = parseInt(prompt("Ingrese el segundo número: "));
let numero3 = parseInt(prompt("Ingrese el tercer número: "));


let numero_mayor = numero1


if (numero2 > numero_mayor){
    numero_mayor = numero2;
}   

if (numero3 > numero_mayor){
    numero_mayor = numero3;
}

alert(`El mayor de los 3 numeros es el ${numero_mayor}`);



