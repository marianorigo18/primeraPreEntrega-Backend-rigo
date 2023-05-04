class ProductManager{
    constructor(){
        this.products = [];
    }
    addProducts(title, description, price, thumbnail, stock){

        if(title == null || description == null || price == null || thumbnail == null || stock == null){
        return console.log("no se permiten campos vacios");
        }

        const product = {
            title, description, price, thumbnail, stock
        }
        if(this.products.length === 0){
            product.code = 1
        }else{
            product.code = this.products[this.products.length -1].code + 1
        }

        this.products.push(product)
        console.log("se almaecno un nuevo producto")
    }
    getProducts(){
        return this.products
    }
    getProductsByCode(code){
        const product = this.products.find((product) => {
            return product.code == code
        })
        if(!product){
            return "not found"
        }else{
            return product
        }
    }
}

const productManager = new ProductManager(); //crear instancia para acceder a sus metodos

console.log(productManager.addProducts("contactor", "220v", 1500, "contactor.jpg", 15))
console.log(productManager.addProducts("contactor", "110v", 2500, "contactor.jpg", 20))

// console.log(productManager.getProducts())
console.log(productManager.getProductsByCode(2))