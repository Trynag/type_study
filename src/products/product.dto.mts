import { Product } from "./product.model.mjs";

export interface CreateProduct extends Omit <Product, 'category' | 'createdAt'> {
  categoryId: number
}

/* 
  es como un return from function y en las comillas se le pasan los parametros a
  omitir y por medio de un pipe operator agregamos los demas datos que no se pueden
*/