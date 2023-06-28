import { addProduct, calcStock, product } from "./product.service.mjs";

addProduct({
  id: '001',
  createdAt: new Date(),
  updatedAt: new Date(),
  title: 'Pro1',
  stock: 10,
  sieze: 'XL',
  category: {
    id: '0001',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'P1'
  }
})

addProduct({
  id: '002',
  createdAt: new Date(),
  updatedAt: new Date(),
  title: 'Pro2',
  stock: 10,
  sieze: 'XL',
  category: {
    id: '0002',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'P2'
  }
})

product.forEach(products => console.log(products))

console.log(calcStock())