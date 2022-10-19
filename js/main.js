const section = document.querySelector(`#fragances`)
const products = []
const cart =[]
const prodJSON = "../data-base/products.json"
let HTMLcontent = ""


const makeCard = (content)=> {
    const {id, brand, name, price, img} = content
    return  `<div class="col col-3" id="fragances">
                <div class="card" style="width: 13rem;">
                    <img src="../${img}" class="card-img-top card_img">
                    <div class="card-body card_product">
                        <h5 class="card-title card_brand">${brand}</h5>
                        <p class="card-text card_name">${name}</p>
                        <p class="card-text card_price">$${price}</p>
                        <button class="btn card_btn" id="btn${id}">AÑADIR AL CARRITO</button>
                    </div>
                </div>
            </div>`
}

const showError = ()=> {
    return `<div class="error">
                <h2>¡Ups...!</h2>
                <img src="images/cruz.png">
                <p> No pudimos cargar la información.</p>
                <p> Por favor, intenta nuevamente en unos minutos.</p>
            </div>`
}

const loadProducts = async (array) =>{
    try{
        const response = await fetch ('../products.json'); 
        const data = await response.json ()
        array.push(...data); 
        array.forEach(element => HTMLcontent += makeCard (element))
    }
    catch (error) {
        HTMLcontent += showError ()
    }
    finally {
        section.innerHTML = HTMLcontent
    }
}

document.addEventListener("DOMContentLoaded", async ()=> {
    const wait = await loadProducts(products)
}) 

//FUNCION BOTONES
function buttonEvent(){
    products.forEach(Product => {
        const btn = document.querySelector(`#btn${Product.id}`)
            btn.addEventListener("click", ()=> addToCart(`${Product.id}`))
    });
}
buttonEvent()

