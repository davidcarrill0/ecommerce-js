// simulador de carrito

// array de carrito para guardar items
const SHOPPING_CART = [];

// funcion para agregar items
function pushItem() {
    let item = prompt("Agregue un producto al carrito - Ej: Huevos");  // Ingresar producto

    // Si usuario cancela el prompt 
    if (item === null) {
        alert("Cantidad de productos: " + SHOPPING_CART.length) // mostrar el total de productos

        // Si usuario deja vacio el promt
    } else if (item === "") {
        alert("Ingrese un producto")
        pushItem();// ejecutar nuevamente la función

        // de lo contrario, Si usuario ingresa un producto
    } else {
        SHOPPING_CART.push(item); // agregar al array del carrito
        let otherItem = confirm("¿Desea Agregar otro producto?") // preguntar para continuar

        // Si usuario da true
        if (otherItem) {
            pushItem(); // se ejecuta la funcion 

            // de lo contrario Si usuario da false
        } else {
            alert("Cantidad de productos: " + SHOPPING_CART.length) // alert con la cantidad de productos

            // recorrido del array
            for (let itemCart of SHOPPING_CART) {
                console.log(itemCart); // Se imprime en consola lista de productos
            }
        }
    }
}
pushItem(); // ejecutar función




