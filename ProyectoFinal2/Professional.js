///////////////////////////////////////////////////////////////
class Professional {
    constructor(name, age, weight, height, nationality, oscarsNumber, profession, photo) {
      this.name = name;
      this.age = age;
      this.weight = weight;
      this.height = height;
      this.nationality = nationality;
      this.oscarsNumber = oscarsNumber;
      this.profession = profession;
      this.photo = photo;
    }
  
    //mostrarImagen() {
      //return `<img src="${this.photo}" alt="${this.title}" style="height: 450px; width: auto;">`;
    //}
    mostrar() {
      return `
      Name: ${this.name}
      Age: ${this.age}
      Weight: ${this.weight}
      Height: ${this.height}
      Nationality: ${this.nationality}
      Oscars Number: ${this.oscarsNumber}
      Profession: ${this.profession}`;
    } 
  }
  //Profesionales de Primera Película//
  let actor1 = new Professional("Ron Perlman", 73, 90, 185, "American", 0, "Actor", "imagenes/actor1.jpg");
  let actor2 = new Professional("David Bradley", 81, 75, 180, "British", 0, "Actor", "imagenes/actor2.jpg");
  //let actorsArray = [actor1, actor2];
  
  
  // Agregar el array de actores a la propiedad actors
  //actorsArray.mostrar();
  
  
  //Profesionales 2da película
  let actress1 = new Professional("Scarlett Johansson",38, 58, 160,"American", 0, "Actress","imagenes/actor3.jpg");
  let actor3 = new Professional("David Harbour", 48, 90, 185, "American", 0, "Actor","imagenes/actor4.jpg");
  //let actorsArray2 = [actress1, actor3];
  
  //actorsArray2.mostrar();
  
  //Profesionales de Tercera Película//
  
  let actress2 = new Professional("Michelle Yeoh",60, 55, 163,"Malaysian", 1, "Actress","imagenes/actor5.jpg");
  let actor4 = new Professional("Ke Huy Quan", 51, 58, 163,"Vietnamese", 1, "Actor","imagenes/actor6.jpg");
  
  //let actorsArray3 = [actress2, actor4];
  
  // console.log(mymovie3.mostrarMovies());
  let profesionales = [actor1, actor2,actress1, actor3,actress2, actor4];
  
  
  // Función para agregar un nuevo profesional al formulario
  function agregarProfesional(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
  // Obtener los valores ingresados en los campos del formulario
  const name = $('#name').val();
  const age = $('#age').val();
  const weight = $('#weight').val();
  const height = $('#height').val();
  const nationality = $('#nationality').val();
  const oscarsNumber= $('#oscarsNumber').val();
  const profession = $('#profession').val();
  const photo = $('#foto').val();
  
  // Crear una nueva instancia de la clase Profesional con los valores ingresados
  const nuevoProfesional = new Professional(name, age, weight, height, nationality, oscarsNumber, profession, photo);
  
  // Agregar la nueva película al array "profesionales"
  profesionales.push(nuevoProfesional);
  
  // Limpiar los campos del formulario después de agregar al profesional
  $('form').trigger("reset");
  }
  
  // Cuando el documento esté listo, asignamos el evento clic al botón "Mostrar Profesionales"
    $(document).ready(function() {
  // Agregar el evento de envío del formulario
    $('form').on('submit', agregarProfesional);
  // Buscamos el botón por su ID
    $('#mostrarProfesional').on('click', function() {
      const professionalsContainer = $('#professionalsContainer'); // Contenedor de películas
  // Limpiar el contenedor antes de agregar las cards
      professionalsContainer.empty();
      // Recorremos el array de películas y las mostramos una por una
    profesionales.forEach(function(profesional) {
  //Crear la estructura de la card con los detalles de la película esto es nuevo
                      const card = `
                              <div class="card" style="width: 18rem;">
                                  <img src="${profesional.photo}" class="card-img-top" alt="${profesional.name}">
                                <div class="card-body">
                                  <h5 class="card-title">${profesional.name}</h5>
                                  <p class="card-text">${profesional.mostrar()}</p>
                                </div>
                              </div>
                              `;
  // Agregar la card al contenedor de películas
  professionalsContainer.append(card);
  });
  });
  });
    