class ProductManager{
    constructor(){
        this.products = [];
    }
    addProducts(title, description, price, thumbnail, stock, code){

        if( title == null ||
            description == null ||
            price == null ||
            thumbnail == null ||
            stock == null ||
            code == null){
            console.log("Debe completar todos los campos por favor");
            return;
        }
        const exist = this.products.find((prod)=> prod.code == code)
        if(exist) {
          console.log(`Ya existe un producto con el codigo "${code}"`);
          return;
        }

        const product = {title, description, price, thumbnail, stock, code}
        
        if(this.products.length === 0){
            product.id = 1
        }else{
            product.id = this.products[this.products.length -1].id + 1
        }

        this.products.push(product)

        console.log("se almaecno un nuevo producto")
    }
    getProducts(){
        return console.log(this.products)
    }
    getProductByCode(code){
        const product = this.products.find((product) => product.code == code)
        if(!product){
            console.log(`El product con codigo "${code}" no se encontro`)
        }
        return console.log(product)
    }
}

const productManager = new ProductManager(); //crear instancia para acceder a sus metodos

const product1 = productManager.addProducts("interruptor", "20A", 1500, "interruptor.jpg", 20, 565645)
const product2 = productManager.addProducts("interruptor", "20A", 1500, "interruptor.jpg", 20, 565642)

productManager.getProducts()