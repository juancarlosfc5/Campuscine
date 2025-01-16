import { movies } from "./data.js";
import { search, cards, popup, detail } from "./methods.js";

//Extraer texto ingresado por el usuario
const result = document.getElementById("results"); //Definir contenedor de salida

//Impresion inicial
cards(movies, result);

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

// Agrega un evento de click al botón
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
      const error = document.createElement("p");
      error.innerHTML = /*html*/ `
      ${message}
      `;
      result.appendChild(error);
    });
});
