import { addProduct, calcStock, product } from "./product.service";

addProduct({
  title: 'Pro1',
  createdAt: new Date(),
  stock: 10,
  sieze: 'XL'
})

addProduct({
  title: 'Pro2',
  createdAt: new Date(),
  stock: 10,
  sieze: 'XL'
})

console.log({
  product1: product[0],
  product2: product[1]
})

console.log(calcStock)