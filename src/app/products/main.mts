import { addProduct, calcStock, product } from "./product.service.mjs"
import { faker } from '@faker-js/faker'

addProduct({
  id: .,
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


product.forEach(products => console.log(products))

console.log(calcStock())