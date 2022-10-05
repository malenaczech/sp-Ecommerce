//Filtrar productos
let inputFilter = document.querySelector("input")

function filterProducts(){
    //debugger
    inputFilter.value = inputFilter.value.trim().toUpperCase()
    if (inputFilter.value !== " "){
        const search = products.filter (Product=> Product.name.includes(inputFilter.value))
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
filterProducts()