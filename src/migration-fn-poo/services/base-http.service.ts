import { Category } from "../../poo/promises"
import axios from "axios"
import { Product } from "../model/product.model"
import { UpdateProductDto } from "../../app/products/product.dto.mjs"
import { product } from "../../app/products/product.service.mjs"

export class BaseHttpService <T>{
  // data: T[] = []

  // getAll(): T[] | Promise<T[]> {
  //   return []
  // }
  constructor (
    protected url: string
  ) {}

  async getAll(){
    const { data } = await axios.get<T[]>(this.url)
    return data
  }

  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put<T>(`${this.url}/${id}`, changes)
    return data
  }

  /* 
    Por temas de scope, si definimos otro generico en nuestra funcion, el generico, por llevar el mismo nombre no siginifica que va a funcionar, sencillo, funcionamiento de Scope, para esto, es recomadble no usar el mismo nombre y evitar problemas de scope, para esto se definen otros tipos de genericos cuando el metodo se esta construyendo. Claro se puede  tener ambas opciones y tambien es cierto que las dos no son el 
    mismo valor, por eso declaramos dos genericos que contengan la informacion y el valueable interno
  */
}

const API_URL = 'https://api.escuelajs.co/api/v1/categories'
const productService = new BaseHttpService<Category>(API_URL) 
/*
  De esta forma, podemos construir servicios que requieran del consumo de la misma estructura, entonces ya no tenemenos que definir la estructura multiple veces ni pasarle un millar de parametros sino que sera construido de forma dinamica todo gracias a los templates
*/

productService.update<Product['id'], UpdateProductDto>('1', {
  price: 1213823493,
  title : 'asa',
})

const response = await productService.getAll()
console.log(response)

/*
 service.getAll() 
 
 // Como vemos, no hay que definir el tipo de retorno de manera estatica, sino, se define segun el template que 
 // le pasemos por parametro, en este caso, service.getAll nos va a retornar un array de Category o una promesa 
 // con un array de Category. 
*/