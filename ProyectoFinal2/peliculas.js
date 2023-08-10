class Movie {
    constructor(title, releaseYear, nacionality, genre, photo) {
      this.title = title;
      this.releaseYear = releaseYear;
      this.actors = [];
      this.nacionality = nacionality;
      this.director = "Guillermo Del Toro";
      this.writer = "Gris Grimly";
      this.language = "";
      this.plataforma = "";
      this.isMCU = false;
      this.mainCharacterName = "";
      this.producer = "";
      this.distributor = "";
      this.genre = genre;
      this.photo = photo;
    }
    //mostrarImage() {
      //return `<img src="${this.photo}" alt="${this.title}" style="height: 450px; width: auto;">`;
    //}//
     mostrarMovies() {
        let listActors = "";
        this.actors.forEach(actor => {
         listActors += `- ${actor}\n`;
        });
       return `                    
       Title:       ${this.title}\n
       Release Year:${this.releaseYear}
       Actors:      ${listActors}
       Nacionality: ${this.nacionality}
       Director:    ${this.director}
       Writer:      ${this.writer}
       Language:    ${this.language}
       Plataforma:  ${this.plataforma}
       Is MCU:      ${this.isMCU}
       Main Character Name: ${this.mainCharacterName}
       Producer:    ${this.producer}
       Distributor: ${this.distributor}
       Genre:       ${this.genre}`;
    } 
  }
  


//Datos de la Primera Película//

let actor1 = "Ron Perlman";
let actor2 = "David Bradley";
let actorsArray = [actor1, actor2];
let mymovie = new Movie("Pinocchio", 2022, "American", "Animación", "imagenes/pinocho.jpg");

// Agregar el array de actores a la propiedad actors
mymovie.actors = actorsArray;
mymovie.director = "Guillermo Del Toro";
mymovie.writer = "Gris Grimly";
mymovie.language = "English";
mymovie.mainCharacterName = "Gregory Mann";
mymovie.producer = "Alexander Bulkley";
mymovie.distributor = "TriPictures";
mymovie.plataforma = "Netflix";

let actress1 = "Scarlett Johansson";
let actor3 = "David Harbour";
let actorsArray2 = [actress1, actor3];

let mymovie2 = new Movie("Black Widow", 2021, "American", "Ciencia Ficción","imagenes/blackwidow.jpg");
mymovie2.actors = actorsArray2;
mymovie2.director = "Cate Shortland";
mymovie2.writer = "Jac Schaeffer";
mymovie2.language = "English";
mymovie2.isMCU = true;
mymovie2.mainCharacterName = "Scarlett Johansson";
mymovie2.producer = "Kevin Feige";
mymovie2.distributor = "Walt Disney Studios Motion Pictures";
mymovie2.plataforma = "Disney+";

//Datos de la Tercera Película//
let actress2 = "Michelle Yeoh";
let actor4 = "Ke Huy Quan";
let actorsArray3 = [actress2, actor4];

let mymovie3 = new Movie("Todo a la vez en todas partes", 2022, "American", "Comedia Dramática","imagenes/todo.jpg");
mymovie3.actors= actorsArray3;
mymovie3.director = "Daniel Kwan"
mymovie3.writer = "Daniel Scheinert";
mymovie3.language = "English";
mymovie3.isMCU = false;
mymovie3.mainCharacterName = "Michelle Yeoh";
mymovie3.producer = "Anthony y Joe Russo";
mymovie3.distributor = "YouPlanet Pictures";
mymovie3.plataforma = "Movistar+";

// console.log(mymovie3.mostrarMovies());
let movies = [mymovie, mymovie2,mymovie3];

// Función para agregar una nueva película al formulario
function agregarPelicula(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Obtener los valores ingresados en los campos del formulario
  const title = $('#title').val();
  const releaseYear = $('#released').val();
  const actors = $('#actor').val().split(',');
  const nacionality = $('#nacionality').val();
  const director = $('#director').val();
  const writer = $('#writer').val();
  const language = $('#language').val();
  const plataforma = $('#plataforma').val();
  const isMCU = $('#mcu').val() === "true"; // Convierte el valor en un booleano
  const mainCharacterName = $('#mainame').val();
  const producer = $('#producer').val();
  const distributor = $('#distributor').val();
  const genre = $('#genre').val();
  const photo = $('#foto').val();

  // Crear una nueva instancia de la clase Movie con los valores ingresados
  const nuevaPelicula = new Movie(title, releaseYear, nacionality, genre, photo);
  nuevaPelicula.actors = actors;
  nuevaPelicula.director = director;
  nuevaPelicula.writer = writer;
  nuevaPelicula.language = language;
  nuevaPelicula.plataforma = plataforma;
  nuevaPelicula.isMCU = isMCU;
  nuevaPelicula.mainCharacterName = mainCharacterName;
  nuevaPelicula.producer = producer;
  nuevaPelicula.distributor = distributor;

  // Agregar la nueva película al array "movies"
  movies.push(nuevaPelicula);

  // Limpiar los campos del formulario después de agregar la película
  $('form').trigger("reset");
}

// Cuando el documento esté listo, asignamos el evento clic al botón "Mostrar Películas"
    $(document).ready(function() {
// Agregar el evento de envío del formulario
    $('form').on('submit', agregarPelicula);
// Buscamos el botón por su ID
    $('#mostrarPeliculas').on('click', function() {
      const moviesContainer = $('#moviesContainer'); // Contenedor de películas esto es nuevo
      // Limpiar el contenedor antes de agregar las cards
      moviesContainer.empty(); //esto es nuevo
// Recorremos el array de películas y las mostramos una por una
    movies.forEach(function(movie) {
      //Crear la estructura de la card con los detalles de la película esto es nuevo
            const card = `
                <div class="card" style="width: 18rem;">
                    <img src="${movie.photo}" class="card-img-top" alt="${movie.title}">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text">${movie.mostrarMovies()}</p>
                    </div>
                </div>
            `;
// Agregar la card al contenedor de películas
moviesContainer.append(card);
});
});
});







