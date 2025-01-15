// Función de búsqueda
export function search(movies, busqueda, resultado) {
  

  if (busqueda) {
    // Filtrar los libros que contienen la palabra en la descripción
    const filtro = movies.filter((movie) =>
      movie.title.toLowerCase().includes(busqueda)
    );

    if (filtro.length > 0) {
      filtro.forEach((movie) => {
        console.log(movie.poster)
        const div = document.createElement("div"); //Crear el div que contendra la información
        div.innerHTML = `
            <h3>${movie.title}</h3>
            <p>${movie.summary}</p>
            <img src="${movie.poster}" alt="">
          `; //Incluir información en el div
        resultado.appendChild(div); //Agregar div al DOM de results
      });
    } else {
      resultado.innerHTML = "<br> No se encontraron resultados para tu busqueda."; //Mensaje de validación para no coincidencias
    }
  }
}

