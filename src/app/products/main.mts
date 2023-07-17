import { addProduct, calcStock, product } from "./product.service.mjs"
import { faker } from '@faker-js/faker'

addProduct({
  id: faker.datatype.uuid(),
  description: 'a',
  color: '#a',
  price: 100,
  isNew: true,
  image: 'a',
  tags: ['a'],
  updatedAt: new Date(),
  stock: 10,
  title: '1',
  categoryId: faker.string.uuid()
})


product.forEach(products => console.log(products))

console.log(calcStock())