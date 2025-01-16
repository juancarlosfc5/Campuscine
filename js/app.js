import { movies } from "./data.js";
import { search } from "./methods.js";

//Extraer texto ingresado por el usuario
const result = document.getElementById("results"); //Definir contenedor de salida

// Agrega un evento de click al botón
document.getElementById("button").addEventListener("click", (e) => {
  const quest = document.getElementById("input").value.toLowerCase();
  result.innerHTML = ""; // Limpiar resultados anteriores
  search(movies, quest, result)
    .then((resolveFunction) => {
      // Ejecuta la función pasada en el resolve
      resolveFunction();
    })
    .catch((rejectFunction) => {
      // Ejecuta la función pasada en el reject
      rejectFunction();
    });
});
