import { Category } from "../../poo/promises"
import axios from "axios"
import { Product } from "../model/product.model"

export class BaseHttpService <T>{
  // data: T[] = []

  // getAll(): T[] | Promise<T[]> {
  //   return []
  // }
  constructor (
    private url: string
  ) {}

  async getAll(){
    const { data } = await axios.get<T[]>(this.url)
    return data
  }
}

const API_URL = 'https://api.escuelajs.co/api/v1/categories'
const productService = new BaseHttpService<Category>(API_URL) 

/*
  De esta forma, podemos construir servicios que requieran del consumo de la misma estructura, entonces ya no tenemenos que definir la estructura multiple veces ni pasarle un millar de parametros sino que sera construido de forma dinamica todo gracias a los templates
*/

const response = await productService.getAll()
console.log(response)

/*
 service.getAll() 
 
 // Como vemos, no hay que definir el tipo de retorno de manera estatica, sino, se define segun el template que 
 // le pasemos por parametro, en este caso, service.getAll nos va a retornar un array de Category o una promesa 
 // con un array de Category
*/