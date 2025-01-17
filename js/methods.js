// Function search
export function search(movies, quest, result) {
  return new Promise((resolve, reject) => {
    if (!quest) {
      alert("No se ingresaron datos para realizar la búsqueda."); //Mensaje de alerta de validación para no entrada de busqueda
      cards(movies, result);
    } else {
      // Filtrar los libros que contienen la palabra en la descripción
      const filter = movies.filter((movie) =>
        movie.title.toLowerCase().includes(quest)
      );
      console.log(filter);

      if (filter.length > 0) {
        resolve(filter); // Resultado positivo para la promesa entrega el array filtrado
      } else {
        reject("No se encontraron resultados para su busqueda."); // Resultado negativo para la promesa entrega el mensaje de error
      }
    }
  });
}

// Function cards
export function cards(create, result) {
  create.forEach((movie) => {
    const { title, poster, summary } = movie;
    const card = document.createElement("div"); //Crear el div que contendra la card
    card.classList.add("card"); //Agrega la clase de la card
    card.innerHTML = /*html*/ ` 
      <div> <h3>${title}</h3> </div>
      <div> <img src="${poster}" alt="image"> </div>
      <div> <p>${summary}</p> </div>
      <div> <button data-name="${title}" class="buttonDetail" >Ver detalle</button> </div>
    `; //Incluir diseno html de la card
    result.appendChild(card); //Agregar tarjeta al div "results"
  });
}

// Function popup
export function popup(create, result) {
  create.forEach((movie) => {
    const { title, poster, description, cast, duration, genre, releaseDate } =
      movie;
    const cardHidden = document.createElement("div"); //Crear el div que contendra el popup
    cardHidden.classList.add("popup"); //Agrega la clase del popup
    cardHidden.innerHTML = /*html*/ `
  <div class="popup">
    <span class="popup-close">&times;</span>
    <div class="popup-content">
      <div class="popup-image">
        <img src="${poster}" alt="${title}">
      </div>
      <div class="popup-details">
        <div class="popup-title">${title}</div>
        <div class="popup-description">${description}</div>
        <div class="popup-metadata">
          <div class="popup-metadata-left">
            <p>${cast}</p>
          </div>
          <div class="popup-metadata-right">
            <p>${duration}</p>
            <p>${genre}</p>
            <p>${releaseDate}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`; //Incluir diseno html del popup
    result.appendChild(cardHidden); //Agregar tarjeta al div "results"
  });
}

// Function detail
export function detail(movies, quest) {
  return new Promise((resolve, reject) => {
    if (!quest) {
      alert("No se ingresaron datos para realizar la búsqueda."); //Mensaje de alerta de validación para no busqueda
    } else {
      // Filtrar los libros que contienen la palabra en la descripción
      const filter = movies.filter((movie) => movie.title.includes(quest));
      console.log(filter);

      if (filter.length > 0) {
        resolve(filter); // Resultado positivo para la promesa entrega el array filtrado
      } else {
        reject("No se encontraron resultados para su busqueda."); // Resultado negativo para la promesa entrega el mensaje de error
      }
    }
  });
}

// Function close popup
document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("popup-close") ||
    e.target.classList.contains("popup-backdrop")
  ) {
    const popup = document.querySelector(".popup");
    const backdrop = document.querySelector(".popup-backdrop");
    if (popup) popup.remove();
    if (backdrop) backdrop.remove();
  }
});
