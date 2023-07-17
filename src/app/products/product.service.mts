import { CreateProduct } from "./product.dto.mjs";
import { Product } from "./product.model.mjs";

export const product: Product[] = []
export const addProduct = (data: CreateProduct): Product => {
  const newProduct: Product = {
    ...data,
   createdAt: new Date(),
   category: {
    name: "a",
    createdAt: new Date(),
    updatedAt: new Date(),
    id: data.categoryId
   }
  }

  product.push(newProduct)
  return newProduct
}
export const calcStock = () => { 
  return product.reduce((acc, products) => acc + products.stock, 0  ); // el cero al final es el inicializador de acc
}