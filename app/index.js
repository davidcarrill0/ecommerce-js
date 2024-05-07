// simulador de carrito

// array de carrito para guardar items
// const SHOPPING_CART = [];


// Objeto producto
class Producto {
    constructor(nombre, precio, img) {
        this.marca = nombre;
        this.precio = precio;
        this.img = img;
    }
}

const ZAPATOS = new Producto("Nike", 150, "nike.jpg");
const CAMISETA = new Producto("Adidas", 50, "adidas.jpg");
const PANTALON = new Producto("Zara", 120, "zara.jpg");

const ArrayProductos = [ZAPATOS, CAMISETA, PANTALON];

// Obtener el contenedor
const contenedor = document.getElementById("contenedor");

// Mostrar los productos en el contenedor
ArrayProductos.forEach(Producto => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
        <p>nombre: ${Producto.marca}</p>
        <p>precio: ${Producto.precio}</p>
        <img src="${Producto.img}"/>
        <button>Agregar</button>
    `;
    contenedor.appendChild(div);
});





