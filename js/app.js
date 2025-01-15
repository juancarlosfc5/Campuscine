import { movies } from "./data.js";
import { search } from "./methods.js";

//Extraer texto ingresado por el usuario
const resultado = document.getElementById("results"); //Definir contenedor de salida

// Agrega un evento de click al botón
//document.getElementById('button').addEventListener('click', search(movies, busqueda, resultado));

document.getElementById('button').addEventListener('click',(e) =>{
    const busqueda = document.getElementById("box").value.toLowerCase(); 
    resultado.innerHTML = ""; // Limpiar resultados anteriores
    search(movies, busqueda, resultado)
})