const cardContainer = document.getElementById(`productsContainer`);
const cardContainerMan = document.getElementById(`productsManContainer`);

// Mostrar productos Mujeres en HTML
function cardProductsGirl(products) {
    products.forEach(product => {
        const newItem = document.createElement("div");
        newItem.classList = "best-sell-card";
        newItem.innerHTML = `
            <div class="best-sell-img-container">
                <img class="product-img" src="${product.img}" alt="">
                <div class="card-divider"></div>
            </div>
            <div class="card-info-container">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
            </div>
            <div class="card-quantity-container">
            <h4>$${product.price}</h4>
            <button class="button-add-cart"><b>Agregar</b> <img class="icon-cart" src="./assets/icons/icon-cart.png"></button>
            </div>
            
        `
        cardContainer.appendChild(newItem);
        newItem.getElementsByTagName(`button`)[0].addEventListener(`click`, () => addToCart(product));
    });
}
cardProductsGirl(PRODUCTS);


// Mostrar productos Hombres en HTML
function cardProductsMan(products) {
    products.forEach(product => {
        const newItem = document.createElement("div");
        newItem.classList = "best-sell-card";
        newItem.innerHTML = `
            <div class="best-sell-img-container">
                <img class="product-img" src="${product.img}" alt="">
                <div class="card-divider"></div>
            </div>
            <div class="card-info-container">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
            </div>
            <div class="card-quantity-container">
            <h4>$${product.price}</h4>
            <button class="button-add-cart"><b>Agregar</b> <img class="icon-cart" src="./assets/icons/icon-cart.png"></button>
            </div>
            
        `
        cardContainerMan.appendChild(newItem);
        newItem.getElementsByTagName(`button`)[0].addEventListener(`click`, () => addToCart(product));
    });
}
cardProductsMan(PRODUCTS_MAN);



// Animacion Boton agregar
document.querySelectorAll('.button-add-cart').forEach(button => {
    button.addEventListener('click', function() {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 50);  
    });
});