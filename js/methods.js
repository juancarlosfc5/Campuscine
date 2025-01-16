// Función de búsqueda
export function search(movies, quest, result) {
  return new Promise((resolve, reject) => {
    if (!quest) {
      alert("No se ingresaron datos para realizar la búsqueda."); //Mensaje de alerta de validación para no busqueda
    } else {
      // Filtrar los libros que contienen la palabra en la descripción
      const filter = movies.filter((movie) =>
        movie.title.toLowerCase().includes(quest)
      );
      console.log(filter);

      if (filter.length > 0) {
        resolve(() => 
        filter.forEach((movie) => {
          const { title, poster, summary } = movie;
          const div = document.createElement("div"); //Crear el div que contendra la tarjeta
          div.innerHTML = `
            <h3>${title}</h3>
            <img src="${poster}" alt="">
            <p>${summary}</p>
            <button data-name="${title}" >Ver detalle</button>
          `; //Incluir tarjeta en el div
          result.appendChild(div); //Agregar tarjeta al div "results"
        })
      )} else {
        reject(() => {
          result.innerHTML = "<br> No se encontraron resultados para su busqueda."
        });
      }
    }
  });
}
