//Desafio extra:
/*Realizar una clase ProductManager que gestione un conjunto de productos.
Debe crearse desde un constructor con el elemento products, que sera un array vacio.
Debe contar con un metodo addProduct que reciba un producto y lo agregue al array de productos.
-Validar que no se repita el campo code y que todos los campos sean obligatorios.
-Implementar un id autoincrementable para cada producto.
Se debe contar con un metodo getProducts que devuelva el array de productos.
Se debe contar con un metodo getProductById que reciba un id y devuelva el producto correspondiente. En caso de no encontrarlo devolver un mensaje Not Found. 
*/
class ProductManager {
  constructor() {
    this.products = [];
    this.idProduct = 0;
  }
  addProduct(name, description, code, price, stock, thumbnail) {
    if (!name || !description || !code || !price || !stock || !thumbnail) {
      console.log("Todos los campos son obligatorios");
      return;
    }
    if (this.products.find((product) => product.code === code)) {
      console.log("No se pueden tener productos con el mismo code");
      return;
    }
    this.idProduct++;
    const newProduct = {
      id: this.idProduct,
      name,
      description,
      code,
      price,
      stock,
      thumbnail,
    };
    this.products.push(newProduct);
  }
  get Products() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (product) {
      return product;
    } else {
      return "Producto no encontrado";
    }
  }
}

const manager = new ProductManager(); // manager es una instancia del ProductManager
manager.addProduct("laptop", "I5 128gb", "A001", 1500, 25, "sin imagen");
manager.addProduct("tv", "smart 50", "A2546", 450, 7, "sin imagen");
manager.addProduct(
  "smartphone",
  "samsungA78",
  "T002",
  850,
  25,
  "http://mapeobuscando"
);
console.log(manager.Products);

console.log(manager.getProductById(2));
console.log(manager.getProductById(5)); //producto no encontrado