//Generar cards HTML
const products = []

class Product {
    constructor(id, brand, name, price) {
        this.id = id
        this.brand = brand
        this.name = name
        this.price = price

    }
}

function generator() {
    products.push(new Product("123", "Nina Ricci", "Nina EDP - 50ml", "$15000"))
    products.push(new Product("234", "Nina Ricci", "LUNA EDP - 50ml", "$15800"))
    products.push(new Product("345", "Nina Ricci", "Nin Rouge EDP - 80ml", "$18000"))
    products.push(new Product("456", "Nina Ricci", "Madmoiselle Ricci EDP - 80ml", "$17900"))
    products.push(new Product("567", "Givenchy", "L'interdit EDP - 80ml", "$22000"))
    products.push(new Product("678", "Givenchy", "L'interdit Rouge EDP - 80ml", "$24000"))
}


const loadProducts = (products) =>
{
    products.forEach(Product => {
        let div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.innerHTML =`
            <h2>${Product.brand}</h2>
            <p>${Product.name}</p>
            <h3>${Product.price}</h3>
            <button class="" id="btn${Product.id}">Agregar</button>
        `;
        container.appendChild(div);
    });
}

generator()
loadProducts(products)
