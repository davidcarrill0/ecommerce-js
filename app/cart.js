const cardContainer = document.getElementById(`productsContainer`);
const cardTotalNumber = document.getElementById(`cart-total-number`);
const clearCartElement = document.getElementById(`clearCartButon`);

// Mostrar productos en HTML
function cardProducts() {
    cardContainer.innerHTML = "";
    const products = JSON.parse(localStorage.getItem("PRODUCTS"));
    console.log(products);
    if (products && products.length > 0) {
        products.forEach(product => {
            const newItem = document.createElement("div");
            newItem.classList = "cart-items-container";
            newItem.innerHTML = `

    <div class="cart-items-component">
            <div class="cart-img-container">
                <img class="cart-img" src=".${product.img}">
                <div>
                    <h5>${product.name}</h5>
                    <p>${product.description}</p>
                </div>
            </div>

            <div class="card-quantity-component">
                <button class="card-quantity-icon">-</button>
                <h5>${product.quantity}</h5>
                <button class="card-quantity-icon">+</button>
            </div>

            <p>$${product.price}</p>

    </div>`

            cardContainer.appendChild(newItem);
            newItem.getElementsByTagName(`button`)[1]
                .addEventListener(`click`, (e) => {
                    const counterItemNumber = e.target.parentElement.getElementsByTagName("h5")[0];
                    counterItemNumber.innerText = addToCart(product);
                    updateTotal();
                });
            cardContainer.appendChild(newItem);
            newItem.getElementsByTagName(`button`)[0]
                .addEventListener(`click`, (e) => {
                    removeOfCart(product);
                    cardProducts();
                    updateTotal();
                });
        });
    }
}

cardProducts();
updateTotal();

function updateTotal(){
    const products = JSON.parse(localStorage.getItem("PRODUCTS"));
    let totalPrice = 0;
    if (products && products.length > 0){
        products.forEach(product => {
            totalPrice += product.price * product.quantity;
        })
        cardTotalNumber.innerText = totalPrice.toFixed(2);
    }else{
        cardTotalNumber.innerText = 0;
    }
}

clearCartElement.addEventListener("click", clearCart)
function clearCart (){
    localStorage.removeItem("PRODUCTS");
    updateTotal();
    cardProducts();
    updateCounterCart();
}