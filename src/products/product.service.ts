import { Product } from "./product.model";

export const product: Product[] = []
export const addProduct = (data: Product) => product.push(data)
export const calcStock = (): number => { 
  return product.reduce((acc, products): number => acc + products.stock, 0); // el cero al final es el inicializador de acc
}