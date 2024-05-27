// function - agregar al carrito
function addToCart(product) {
    const storage = JSON.parse(localStorage.getItem(`PRODUCTS`));
    console.log(storage);
    let count = 0;
    if (!storage) {
        const newProduct = getNewProductStorage(product);
        localStorage.setItem(`PRODUCTS`, JSON.stringify([newProduct]));
        count = 1;
    } else {
        const indexProduct = storage.findIndex(PRODUCTS => PRODUCTS.id === product.id);
        console.log(indexProduct);
        const newStorage = storage;
        if (indexProduct === -1) {
            newStorage.push(getNewProductStorage(product));
            count = 1;
        } else {
            newStorage[indexProduct].quantity++;
            count = newStorage[indexProduct].quantity;
        }
        localStorage.setItem(`PRODUCTS`, JSON.stringify(newStorage));
    }
    updateCounterCart();
    return count;
}


function removeOfCart(product){
    const storage = JSON.parse(localStorage.getItem(`PRODUCTS`));
    const indexProduct = storage.findIndex(PRODUCTS => PRODUCTS.id === product.id);
    if (storage[indexProduct].quantity === 1){
        storage.splice(indexProduct,1);
    }else{
        storage[indexProduct].quantity --;
    }
    localStorage.setItem(`PRODUCTS`, JSON.stringify(storage));
    updateCounterCart();
}

// function - agregar 1 al producto
function getNewProductStorage(product) {
    const newProduct = product;
    newProduct.quantity = 1;
    return newProduct;
}

// function - actualizar contador carrito
const counterElement = document.getElementById(`quantity-cart`);
function updateCounterCart() {
    const storage = JSON.parse(localStorage.getItem(`PRODUCTS`));
    if (storage && storage.length >0){
        const counter = storage.reduce((acum, current) => acum+current.quantity,0);
        counterElement.innerText = counter;
    }else{
        counterElement.innerText = 0;
    }
}

updateCounterCart();