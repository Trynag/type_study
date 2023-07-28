import { ProductMemoryServices } from "./services/product-memory.services";

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

console.log(productService.getAll())

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

console.log(productService2.getAll())
console.log({
  '1': productService.getAll(),
  '2': productService2.getAll()
})

console.log(productService === productService2)

const a = new ProductMemoryServices()
const b = new ProductMemoryServices()

console.log(a === b)