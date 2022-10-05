//Generar cards HTML
const products = []


class Product {
    constructor(id, brand, name, price) {
        this.id = id;
        this.brand = brand;
        this.name = name;
        this.price = price;

    }
}

function generator() {
    products.push(new Product("123", "Nina Ricci", "NINA EDP - 50ML", 15000));
    products.push(new Product("234", "Nina Ricci", "LUNA EDP - 50ML", 15800));
    products.push(new Product("345", "Nina Ricci", "NINA ROUGE EDP - 80ML", 18000));
    products.push(new Product("456", "Nina Ricci", "MADMOISELLE RICCI EDP - 80ML", 17900));
    products.push(new Product("567", "Givenchy", "L'INTERDIT EDP - 80ML", 22000));
    products.push(new Product("678", "Givenchy", "L'INTERDIT ROUGE EDP - 80ml", 24000));
}
generator()



function loadProducts(array) {
    let card = ""
        section.innerHTML = ""
        array.forEach(Product => {
            card = `<div>
                        <h2>${Product.brand}</h2>
                        <p>${Product.name}</p>
                        <h3>$ ${parseFloat(Product.price)}</h3>
                        <button id="btn${Product.id}">+</button>
                    </div>`
                    section.innerHTML += card
        })
}  


let section = document.querySelector(`#post`)


loadProducts(products)

//buttons

function addButton() {
    products.forEach(Product => {
        const btn = document.querySelector(`#btn${Product.id}`)
            btn.addEventListener("click", ()=> addCart(`${Product.id}`))
    })
}
addButton()


function addCart(id) {
    const prod = products.find(Product => Product.id == id)
        cart.push(prod)
        console.table(cart)
        localStorage.setItem("cart", JSON.stringify(cart))
}
addCart(id)

function getCart() {
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"))
    }
}
getCart()