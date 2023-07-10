import { addProduct, calcStock, product } from "./product.service.mjs";

addProduct({
  title: 'Pro1',
  stock: 10,
  size: 'XL',
  categoryId: 1,
})

addProduct({
  title: 'Pro2',
  stock: 10,
  size: 'XL',
  categoryId: 2,
})

product.forEach(products => console.log(products))

console.log(calcStock())