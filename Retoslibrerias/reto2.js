$(document).ready(function() {
    let carrito = [];

    // Función para calcular el precio total de los productos en el carrito
    function calcularTotal() {
      let total = 0;
      carrito.forEach(producto => {
        total += producto.price;
      });
      return total;
    }

    // Función para actualizar el carrito
    function actualizarCarritoModal() {
      let carritoLista = $("#carritoLista");
      let carritoTotal = $("#carritoTotal");

      carritoLista.empty();
      carrito.forEach(producto => {
        carritoLista.append(`<li class="list-group-item">${producto.name} - ${producto.price}€</li>`);
      });

      carritoTotal.text(calcularTotal() + "€");
    }

    // Evento para el botón "Añadir al carrito"
    $(".btn-primary").click(function() {
      let nombre = $(this).closest(".card-body").find(".card-title").text();
      let precio = parseFloat($(this).closest(".card-body").find(".card-price").text());

      carrito.push({ name: nombre, price: precio });
      actualizarCarritoModal();
    });

    // Evento para mostrar el carrito al hacer clic en el botón "Carrito"
    $(".btn-secondary").click(function() {
      $("#carritoModal").modal("show");
    });
  });