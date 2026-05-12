// Obtiene el elemento pantalla usando su ID
const pantalla = document.getElementById("pantalla");


// Función para agregar números u operadores
function agregar(valor){

    // Concatena el valor presionado a la pantalla
    pantalla.value += valor;
}


// Función para limpiar toda la pantalla
function limpiar(){

    // Vacía el contenido de la pantalla
    pantalla.value = "";
}


// Función para borrar un carácter
function borrar(){

    // slice(0, -1) elimina el último carácter
    pantalla.value = pantalla.value.slice(0, -1);
}


// Función que realiza el cálculo
function calcular(){

    // try intenta ejecutar el código
    try{

        // eval interpreta la operación matemática
        pantalla.value = eval(pantalla.value);

    // catch captura errores
    }catch(error){

        // Si existe un error muestra "Error"
        pantalla.value = "Error";
    }
}