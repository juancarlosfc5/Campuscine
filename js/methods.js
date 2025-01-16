// Función de búsqueda
export function search(movies, quest, result) {
  
  if (quest) {
    // Filtrar los libros que contienen la palabra en la descripción
    const filter = movies.filter((movie) =>
      movie.title.toLowerCase().includes(quest)
    );

    if (filter.length > 0) {
      filter.forEach((movie) => {
        const {title, poster, summary} = movie
        const div = document.createElement("div"); //Crear el div que contendra la tarjeta
        div.innerHTML = `
            <h3>${title}</h3>
            <img src="${poster}" alt="">
            <p>${summary}</p>
            <button data-name="${title}" >Ver detalle</button>
          `; //Incluir tarjeta en el div
        result.appendChild(div); //Agregar tarjeta al div "results"
      });
    } else {
      result.innerHTML = "<br> No se encontraron resultados para tu busqueda."; //Mensaje de validación para no coincidencias
    }
  }
}

// Sintaxis Promesa
// const getHeroeByIdAsync = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const p1 = getHeroeById(id);
//       if (p1) {
//         resolve(p1); // Resuelve con el héroe encontrado
//       } else {
//         reject('No se pudo encontrar el héroe'); // Rechaza si no se encuentra
//       }
//     }, 2000);
//   });
// };

// // Uso de la función asíncrona
// getHeroeByIdAsync(2)
//   .then((heroe) => {
//     console.log('Héroe encontrado:', heroe); // { id: 2, name: 'Superman' }
//   })
//   .catch((error) => {
//     console.warn(error); // "No se pudo encontrar el héroe" si falla
//   });

//export function detail(){}

