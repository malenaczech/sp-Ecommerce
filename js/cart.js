//Creacion de carrito
const cart = []

function addButton(){
    products.forEach(Product => {
        const btn = document.querySelector(`#btn${Product.id}`)
            btn.addEventListener ("click", ()=> addCart)        
    });
}
addButton()

function addCart (id){
    const prod = products.find (Product => Product.id == id)
        cart.push(prod)
        localStorage.setItem("cart", JSON.stringify(cart))
}

function getCart () {
    let cart = JSON.parse(localStorage.getItem("cart"))
    let table = document.querySelector("tbody")
        cart.forEach(Product => {
            let file = `<tr>
                            <td>${Product.brand}</td>
                            <td>${Product.name}</td>
                            <td>$ ${Product.price}</td>
                        </tr>`
                        tabla.innerHTML += file
        });
}
getCart()