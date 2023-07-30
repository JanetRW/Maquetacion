//3.Escribir una función en JavaScript que recoja la información de los campos de texto y cree un
//objeto literal que se guarde en un array de objetos literales cada vez que se pulse el botón
//"solicitar información".

// Array para almacenar la información de los formularios enviados
let infoSolicitada = [];

// // Función para recoger la información del formulario y guardarla en el array
    function solicitar() {

        let nombre = document.getElementById('nombre').value;
        let origen = document.getElementById('origen').value;
        let destino = document.getElementById('destino').value;
        let numPersonas = document.getElementById('numPersonas').value;
        let fecha = document.getElementById('fecha').value;

// Crear objeto literal con la información recogida del formulario
let solicitud = {nombre:nombre,
                 origen:origen,
                 destino:destino,
                 numPersonas:numPersonas,
                 fecha:fecha,
                };

// Agrego el objeto literal al array
     infoSolicitada.push(solicitud);
 // Limpio los campos del formulario
//   document.getElementById('formulario').reset();
     console.log(infoSolicitada);
 };

  /////////////////////////////
//4.   Escribe ahora una segunda función en JavaScript que cada vez que se pulse el botón "filtrar", nos
//   muestre por consola la información de las solicitudes recibidas que tengan como destino
//   Canarias, Mallorca o Galicia (tener en cuenta que los usuarios pueden escribir, el destino en
//   mayuscula o minuscula).    

function filtrar() {
    let destinosFiltrar = ["canarias","mallorca","galicia"];

    // Filtrar las solicitudes por destino
    let solicitudesFiltradas = infoSolicitada.filter(solicitud => {
        let destinosminusculas = solicitud.destino.toLowerCase();
        return destinosFiltrar.includes(destinosminusculas);
    });

    // Mostrar los resultados en la consola
    console.log("Solicitudes recibidas con destino en Canarias, Mallorca o Galicia:");
    console.log(solicitudesFiltradas);
//}

//5.Modifica la función anterior para que ahora muestre esos datos en una en la landing page
//maquetada anteriormente.

let elementosFiltrados = document.getElementById('datosFiltrados');
     elementosFiltrados.innerHTML = '';

     solicitudesFiltradas.forEach(solicitud => {
        // Mostrar los resultados en la página
         let resultados = document.createElement('div');
         resultados.textContent = `${solicitud.nombre} quiere viajar desde ${solicitud.origen} a ${solicitud.destino} el día ${solicitud.fecha}, siendo un grupo de ${solicitud.numPersonas} personas.`;

         elementosFiltrados.appendChild(resultados);
     });
 }
