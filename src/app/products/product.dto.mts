import { Product } from "./product.model.mjs";

export interface CreateProduct extends Omit <Product, 'category' | 'createdAt'> {
  categoryId: string
}

/* 
  es como un return from function y en las comillas se le pasan los parametros a
  omitir y por medio de un pipe operator agregamos los demas datos que no se pueden
*/

export type UpdateProductDto = Pick<Product, 'color'>

/*
  el parctial type solament nos pone los tipos que le pasamos en modo opcional -> size?: Size, tambien se pueden poner como interface, aun asi, se pueden alterar
*/

export interface UpdateProductDtoIntrface extends Partial<CreateProduct> {

}

const prbe: UpdateProductDto = {
  color: '#a',
}