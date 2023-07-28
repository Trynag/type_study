import { ProductMemoryServices } from "./services/product-memory.services";
import { ProductHttpService } from "./services/product-http-service";
import process from 'node:process';

const productService = new ProductMemoryServices()

productService.create({
  title: 'Product 1',
  price: 100,
  description: 'bla bla bla',
  categoryId: '12',
  image: 'asa',
  stock: 2,
  isNew: true,
  color: "",
  tags: [],
  createdAt: new Date(),
  updatedAt: new Date(),
})

const productService2 = new ProductMemoryServices()
productService2.add({
  title: 'Product 2',
  price: 100,
  description: 'bla bla bla',
  image: 'asa',
  stock: 2,
  isNew: true,
  color: "",
  tags: [],
  createdAt: new Date(),
  updatedAt: new Date(),
  id: "",
  category: {
    id: '1',
    name: 'uno',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})

const productsHttp = new ProductHttpService();
const width = process.stdout.columns
const products = await productsHttp.getAll()
process.stdout.write('\x1B[2J\x1B[0f'); // Metodo ANSI para limpiar la pantalla
console.time()
console.log('_'.repeat(width))
console.log(products.length)
console.log(products.map(item => item.price))
console.timeEnd()