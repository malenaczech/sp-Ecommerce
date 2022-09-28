//Filtrar productos
let inputFilter = document.querySelector("input")

function filterProducts(){
    inputFilter.value = inputFilter.value.trim().toUpperCase()
    if (inputFilter.value !== ""){
        const search = products.filter (products=> Product.name.includes(inputFilter))
            if (search.length === 0){
                console.clear()
                console.warn("No se encontraron productos.")
                loadProducts (products)
            } else {
            loadProducts(search)
            }
    }
    else{
        loadProducts(products)
    }
}

inputFilter.addEventListener("input", filterProducts)