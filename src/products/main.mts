import { addProduct, calcStock, product } from "./product.service.mjs";

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

product.forEach(products => console.log(products))

console.log(calcStock())