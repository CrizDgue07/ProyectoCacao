
// Puedes agregar más funciones de JavaScript según sea necesario para interactuar con el carrito
// Variables para el carrito
const carrito = [];
const productosEnCarritoContainer = document.getElementById("productos-en-carrito");

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio, imagen) {
    const producto = {
        nombre: nombre,
        precio: precio,
        imagen: imagen
    };
    carrito.push(producto);
    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    productosEnCarritoContainer.innerHTML = ""; // Limpiar el contenido actual

    carrito.forEach(producto => {
        const productoEnCarrito = document.createElement("div");
        productoEnCarrito.classList.add("producto-en-carrito");
        productoEnCarrito.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="detalle-producto">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <button class="btn btn-eliminar" onclick="eliminarDelCarrito('${producto.nombre}')">Eliminar</button>
            </div>
        `;
        productosEnCarritoContainer.appendChild(productoEnCarrito);
    });
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(nombre) {
    const indice = carrito.findIndex(producto => producto.nombre === nombre);
    if (indice !== -1) {
        carrito.splice(indice, 1);
        actualizarCarrito();
    }
}

// Event listener para el botón "Agregar al Carrito" en la sección de productos
const botonesAgregarCarrito = document.querySelectorAll(".btn-agregar-carrito");
botonesAgregarCarrito.forEach(boton => {
    boton.addEventListener("click", function () {
        const nombre = this.getAttribute("data-nombre");
        const precio = parseFloat(this.getAttribute("data-precio"));
        const imagen = this.getAttribute("data-imagen");
        agregarAlCarrito(nombre, precio, imagen);
    });
});

// Obtén el botón de carrito y el carrito emergente
const btnCarrito = document.getElementById("btn-carrito");
const carritoPopup = document.getElementById("carrito-popup");

// Agrega un manejador de eventos al botón de carrito para mostrar/ocultar el carrito emergente
btnCarrito.addEventListener("click", function () {
    // Alterna la clase para mostrar u ocultar el carrito emergente
    carritoPopup.classList.toggle("carrito-visible");
});

// Obtén el botón para cerrar el carrito emergente
const btnCerrarCarrito = document.getElementById("btn-cerrar-carrito");

// Agrega un manejador de eventos al botón de cerrar carrito para ocultar el carrito emergente
btnCerrarCarrito.addEventListener("click", function () {
    // Oculta el carrito emergente
    carritoPopup.classList.remove("carrito-visible");
});
