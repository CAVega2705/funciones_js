"use strict";

/* Inove Coding School
 * Ejercicios de funciones
 */

// Ejercicios con funciones

function imprimirMayor(numero1, numero2) {
    console.log("Funcion imprimir mayor")
    // En esta función debe determinar cual de los dos
    // números ingresados por parámetro es mayor
    // y luego imprimir dicho valor en consola
    if(numero1 > numero2){
        alert(`El numero ${numero1} es mayor que el número ${numero2}`)
    } else
        if (numero2 > numero1){
            alert(`El número ${numero2} es mayor que el número ${numero1}`)
        } else{
            alert(`Ambos números son iguales`)
        }
}

imprimirMayor(2, 10);
