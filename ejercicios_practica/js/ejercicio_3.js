"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán imprimir en consola
*/
let invitado1 = ""
let invitado2 = ""
let invitado3 = ""

function generarInvitados(){
    invitado1 = String(prompt(`Ingrese el nombre del primer invitado/a.`))
    invitado2 = String(prompt(`Ingrese el nombre del segundo invitado/a.`))
    invitado3 = String(prompt(`Ingrese el nombre del tercer invitado/a.`))
    console.log(`Los invitados a la fiesta son ${invitado1}, ${invitado2} y ${invitado3}`)
}
// Definir y crear la función antes de esta llamada
generarInvitados();