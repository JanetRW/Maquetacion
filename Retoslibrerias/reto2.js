$(document).ready(function() {
    let miCarrito = [];

    // calcula el precio total de los productos en mi carrito
    function calcularTotal() {
      let total = 0;
      miCarrito.forEach(producto => {
        total += producto.price;
      });
      return total;
    }

    // Función para actualizar mi carrito modal
    function actualizar() {
      let listaMiCarrito = $("#listaMiCarrito");
      let carritoTotal = $("#carritoTotal");

      listaMiCarrito.empty();
      miCarrito.forEach(producto => {
        listaMiCarrito.append(`<li class="list-group-item">PRENDA: ${producto.name} - ${producto.price}€</li>`);
      });

      carritoTotal.text(calcularTotal() + "€");
      carritoTotal.css("color", "#d63384");
    }

    // uso evento para el botón "Añadir al carrito"
    $(".btn-primary").click(function() {
      let nombre = $(this).closest(".card-body").find(".card-title").text();
      let precio = parseFloat($(this).closest(".card-body").find(".card-price").text());

      miCarrito.push({ name: nombre, price: precio });
      actualizar();
    });

    // muestro el carrito al hacer clic en el botón "Carrito"
    $(".btn-secondary").click(function() {
      $("#carritoModal").modal("show");
    });
  });