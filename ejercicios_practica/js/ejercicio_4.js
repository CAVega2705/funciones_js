"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada
Está función retorna una variable como retorno de salida

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán concatener en una sola variable
tipo texto

La función deberá retornar esta variable con los invitados concatenados
para que luego el sistema use esa variable "invidatos" para imprimir
en consola la lista

*/
let invitado1 = ""
let invitado2 = ""
let invitado3 = ""
var invitados = ""

function generarInvitados(){
    invitado1 = String(prompt(`Ingrese el nombre del primer invitado/a.`)) + ", "
    invitado2 = String(prompt(`Ingrese el nombre del segundo invitado/a.`)) + ", "
    invitado3 = String(prompt(`Ingrese el nombre del tercer invitado/a.`)) + "."
    invitados = invitado1 + invitado2 + invitado3
    return invitados
}
// Definir y crear la función antes de esta llamada
invitados = generarInvitados();
console.log(`Mis invitados: ${invitados}`)