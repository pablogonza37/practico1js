/* Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande
*/

let numeroA = parseInt(prompt("digite un numero: "));
let numeroB = parseInt(prompt("digite otro numero: "));

if (numeroA > numeroB){
    alert(`El mayor de los numeros es el ${numeroA}`);
}else {
    alert(`El mayor de los numeros es el ${numeroB}`);
}