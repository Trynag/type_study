import { Product } from "./product.model.mjs";

export const product: Product[] = []
export const addProduct = (data: Product) => product.push(data)
export const calcStock = () => { 
  return product.reduce((acc, products) => acc + products.stock, 0); // el cero al final es el inicializador de acc
}