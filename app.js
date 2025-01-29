let carrito = {}; // Objeto para almacenar los productos en el carrito

let agregar = document.getElementById('agregar');
let descripcion = document.getElementById('descripcion');

agregar.addEventListener('click', function() {
    let valor1 = parseInt(prompt("Agrega un valor numérico de la cantidad que desea agregar: "));

    if (!isNaN(valor1) && valor1 > 0) {
        let productoNombre = "Producto 1"; // Nombre del producto
        if (carrito[productoNombre]) {
            // Si el producto ya está en el carrito, aumentar la cantidad
            carrito[productoNombre].cantidad += valor1;
        } else {
            // Si no está en el carrito, agregarlo
            carrito[productoNombre] = { cantidad: valor1, precio: 10.00 }; // Precio del producto
        }

        alert("Usted agregó " + valor1 + " productos al carrito!");
        
        // Modificar el contenido de la etiqueta <p> con id "descripcion"
        descripcion.textContent = "Descripción breve del producto 1. Cantidad en el carrito: " + carrito[productoNombre].cantidad;
    } else {
        alert("Por favor, ingrese un número válido.");
    }
});