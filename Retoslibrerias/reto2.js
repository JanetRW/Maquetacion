let prenda1  = {type :"Pantalón suelto gris", price:20};
let prenda2  = {type :"Vestido Tunico", price:18};
let prenda3  = {type :"Falda Mid Print", price:12};
let prenda4  = {type :"Cardigan Largo Rayas", price:12};
let prenda5  = {type :"Short Animal Print", price:12};
let prenda6  = {type :"Peto de Lino", price:17};
let prenda7  = {type :"Vestido ajustado", price:10};
let prenda8  = {type :"Vaquero negro palazzo", price:15};
let prendas = [];

jQuery(() =>{
    $("#prenda1").on("click",() =>{ prendas.push(prenda1);});
    $("#prenda2").on("click",() =>{ prendas.push(prenda2);});
    $("#prenda3").on("click",() =>{ prendas.push(prenda3);});
    $("#prenda4").on("click",() =>{ prendas.push(prenda4);});
    $("#prenda5").on("click",() =>{ prendas.push(prenda5);});
    $("#prenda6").on("click",() =>{ prendas.push(prenda6);});
    $("#prenda7").on("click",() =>{ prendas.push(prenda7);});
    $("#prenda8").on("click",() =>{ prendas.push(prenda8);});

    $("#micarrito").on("click",()=>{//$("#carritoTotal").empty();
                                     //$("#suma").empty();
                                    $("#carritolista").modal("show");
                                    let totalCarrito = 0;
        

                                    
                                    
                                    //$("#totalCarrito").empty();
                                    //$("#suma").empty();
                                    for(ropa of prendas){
                                            
                                            $("#totalCarrito").append("PRENDA: " +ropa.type + " "+ ropa.price + "€<br>")
                                            totalCarrito += ropa.price;
                                        }
                                            $("#suma").append("<p> TOTAL COMPRA: " +totalCarrito+"€</p>");
                                        });
                                            // Agregar una función para limpiar el carrito cuando se cierre el modal
    // $("#carritolista").on("hidden.bs.modal", () => {
    //     $("#carritoTotal").empty();
    //     $("#suma").empty();
    //                                     })
});