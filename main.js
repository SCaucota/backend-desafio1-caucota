class ProductManager {
    static idProduct = 1;
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        if(!this.isValidProduct(product)) {
            console.error("Todos los campos del producto son obligatorios");
            return;
        }

        if(this.isDuplicatedCode(product.code)) {
            console.error("El código (code) del producto ya está en uso");
            return;
        }

        let id = ProductManager.idProduct++

        this.products.push({ id, ...product});
    }

    isValidProduct(product) {
        return (
            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock !== undefined
        );
    }

    isDuplicatedCode(code) {
        return this.products.some(product => product.code === code);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if(!product) {
            console.error(`El producto de id "${id}" no existe`);
            return;
        }

        return product;
    }
}

const product = new ProductManager();

/* product.addProduct({
    title: "Arqueador de pestañas",
    description: "Produto para arquear pestañas de color azul",
    price: 2100,
    thumbnail: "Sin imagen",
    code: "abc1",
    stock: 25
});

product.addProduct({
    title: "Producto de limpieza facial",
    description: "Este es un producto para limpiar el rostro",
    price: 4500,
    thumbnail: "Sin imagen 2",
    code: "abc12",
    stock: 30
});

product.addProduct({
    title: "Sombra de ojos",
    description: "Sombra de ojos color rojo marca AVON",
    price: 1500,
    thumbnail: "Sin imagen 3",
    code: "abc123",
    stock: 15
});

product.addProduct({
    title: "Rimel Transparente",
    description: "Rimel transparente marca AVON",
    price: 2500,
    thumbnail: "Sin imagen 4",
    code: "abc1234",
    stock: 40
});

console.log(product.getProducts());
console.log(product.getProductById(2)); */