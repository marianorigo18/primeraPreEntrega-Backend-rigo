class ProductManager{
    constructor(){
        this.products = [];
    }
    addProducts(title, description, price, thumbnail,code, stock){

        if( title == null ||
            description == null ||
            price == null ||
            thumbnail == null ||
            stock == null ||
            code == null){
            console.log("Debe completar todos los campos por favor");
            return;
        }
        if(this.getProductByCode(code)){
            console.log(`Ya existe un producto con el codigo "${code}"`)
          return;
        }

        const product = {title, description, price, thumbnail, code, stock}
        
        if(this.products.length === 0){
            product.id = 1
        }else{
            product.id = this.products[this.products.length -1].id + 1
        }

        this.products.push(product)

        console.log("se almaecno un nuevo producto")
    }
    getProducts(){
        return this.products
    }
    getProductByCode(code){
        const product = this.products.find((product) => product.code == code)
        if(!product){
            console.log(`No se encontro el producto con code: ${code}`)
        }
        return product
    }
}

//Crear una instancia de la clase ProductManager.
const productManager = new ProductManager(); 

//Llamar a "getProducts". DEBE devolver un arreglo sin elementos ([]).
console.log(productManager.getProducts()); 

//Llamar a "addProduct" con los campos especificados en la cosigna, El objeto debe agregarse satisfactoriamente con un id generado .
console.log(productManager.addProducts("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25))

//Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado 
console.log(productManager.getProducts())

//Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
console.log(productManager.addProducts("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25))

//Llamar a "getProductByCode". Probar con un code = "abc123" (debe devolver el producto con code = "abc123")
console.log(productManager.getProductByCode("abc123"))

//Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo" 
console.log(productManager.getProductByCode(1111))
