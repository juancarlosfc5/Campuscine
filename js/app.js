//Import modules and object
import { movies } from "./data.js";
import { search, cards, popup, detail } from "./methods.js";

//Definir contenedor de salida
const result = document.getElementById("results");

//Impresion inicial de las cards de todas las peliculas
cards(movies, result);

//Impresion card ver detalle
const allButtons = document.querySelectorAll(".buttonDetail"); //Extraer datos de nombres de los botones
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const name = button.getAttribute("data-name"); //Almacenar temporalmente datos
    detail(movies, name)
      .then((filter) => {
        // Ejecuta la función pasada en el resolve para mostrar el popup
        popup(filter, result);
      })
      .catch((message) => {
        // Ejecuta el valor falso para la promesa
        const error = document.createElement("p");
        error.innerHTML = /*html*/ `
      ${message}
      `;
        result.appendChild(error); // Imprime el valor en el contenedor de salida
      });
  });
});

// Agrega un evento de click al botón ver detalle
document.getElementById("button").addEventListener("click", (e) => {
  const quest = document.getElementById("input").value.toLowerCase();
  result.innerHTML = ""; // Limpiar resultados anteriores
  search(movies, quest, result)
    .then((filter) => {
      // Ejecuta la función pasada en el resolve
      cards(filter, result);
      //Impresion ver detalle
      const allButtons = document.querySelectorAll(".buttonDetail");
      allButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          const name = button.getAttribute("data-name");
          console.log(name);
          detail(movies, name)
            .then((filter) => {
              // Ejecuta la función pasada en el resolve
              popup(filter, result);
            })
            .catch((message) => {
              const error = document.createElement("p");
              error.innerHTML = /*html*/ `
      ${message}
      `;
              result.appendChild(error);
            });
        });
      });
    })
    .catch((message) => {
      // Ejecuta el valor falso para la promesa
      const error = document.createElement("p");
      error.innerHTML = /*html*/ `
      ${message}
      `;
      result.appendChild(error); // Imprime el valor en el contenedor de salida
    });
});
