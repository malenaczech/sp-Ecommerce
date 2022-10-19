//CARGAR CARRITO
function addToCart(id) {
    debugger
    const prod = products.find(Producto => Product.id == id)
    cart.push (prod)
    localStorage.setItem("cart", JSON.stringify(cart))
}

function getCart(){
    if (localStorage.getItem("cart")) {
        carrito = JSON.parse(localStorage.getItem("cart"))
    }
}
getCart()

function viewCart(){
    let cart = JSON.parse(localStorage.getItem("cart"))
    let tabla = document.querySelector(`#tabla`)
    cart.forEach(Product => {
        let fila = `<tr>
                        <td>${Product.name}</td>
                        <td>${Product.price}</td>
                    </tr>`
                    tabla.innerHTML += fila
    });
}
viewCart()