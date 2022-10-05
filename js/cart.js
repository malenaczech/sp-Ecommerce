//Creacion de carrito

const cart = []
function getCart() {
    //debugger
    let cart = JSON.parse(localStorage.getItem("cart"))
    let tabla = document.querySelector("tbody")
        cart.forEach(Product => {
            let fila = `<tr>
                            <td>${Product.name}</td>
                            <td>$ ${Product.price}</td>
                        </tr>`
                        tabla.innerHTML += fila
        });
}
getCart()