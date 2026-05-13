// Selecciona la pantalla
const pantalla = document.getElementById("pantalla");


// Función para agregar valores
function agregar(valor){

    pantalla.value += valor;
}


// Función limpiar
function limpiar(){

    pantalla.value = "";
}


// Función borrar último carácter
function borrar(){

    pantalla.value = pantalla.value.slice(0, -1);
}


// Función calcular
function calcular(){

    try{

        pantalla.value = eval(pantalla.value);

    }catch(error){

        pantalla.value = "Error";
    }
}