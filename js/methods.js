// Función de search
export function search(movies, quest) {
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
        resolve(filter);
      } else {
        reject("No se encontraron resultados para su busqueda.");
      }
    }
  });
}

// Función de cards
export function cards(create, result) {
  create.forEach((movie) => {
    const { title, poster, summary } = movie;
    const card = document.createElement("div"); //Crear el div que contendra la tarjeta
    card.classList.add("card");
    card.innerHTML = /*html*/ `
      <div> <h3>${title}</h3> </div>
      <div> <img src="${poster}" alt="image"> </div>
      <div> <p>${summary}</p> </div>
      <div> <button data-name="${title}" class="buttonDetail" >Ver detalle</button> </div>
    `; //Incluir tarjeta en el div
    result.appendChild(card); //Agregar tarjeta al div "results"
  });
}

// Función de popup
export function popup(create, result) {
  create.forEach((movie) => {
    const { title, poster, description, cast, duration, genre, releaseDate } =
      movie;
    const cardHidden = document.createElement("div"); //Crear el div que contendra el popup
    cardHidden.classList.add("popup");
    cardHidden.innerHTML = /*html*/ `
      <div> <h3>${title}</h3> </div>
      <div> <img src="${poster}" alt="image"> </div>
      <div> <p>${description}</p> </div>
      <div> <p>${cast}</p> </div>
      <div> <p>${duration}</p> </div>
      <div> <p>${genre}</p> </div>
      <div> <p>${releaseDate}</p> </div>
    `; //Incluir tarjeta en el div
    result.appendChild(cardHidden); //Agregar tarjeta al div "results"
  });
}

// Función de detail
export function detail(movies, quest) {
  return new Promise((resolve, reject) => {
    if (!quest) {
      alert("No se ingresaron datos para realizar la búsqueda."); //Mensaje de alerta de validación para no busqueda
    } else {
      // Filtrar los libros que contienen la palabra en la descripción
      const filter = movies.filter((movie) => movie.title.includes(quest));
      console.log(filter);

      if (filter.length > 0) {
        resolve(filter);
      } else {
        reject("No se encontraron resultados para su busqueda.");
      }
    }
  });
}
