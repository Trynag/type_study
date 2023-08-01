import { UpdateProductDto } from "../../app/products/product.dto.mjs"
import { Product } from "../model/product.model"
import { BaseHttpService } from "./base-http.service"

export class productCRUDServicce {
  private url = 'https://api.escuelajs.co/api/v1/products'
  private http = new BaseHttpService<Product>(this.url)

  async update (id: Product['id'], dto: UpdateProductDto) {
    return this.http.update(id, dto)
  }

  /*
    Debido a la estructura de BaseHttpService tenemos que, podemos hacer uso de los genericos para reutilizar un servicio sin necesidad de comprometer su tipado. Entonces, como son los genericos en la clase BaseHttpService se aplican a los parametros, simplemente los tipos, simplemente, pasamos los tipos de los parametros y por inferencia ya tenemos un tipado dinamico, tambien, sabemos que retorna un producto, debido a que la clase baseHttpService contiene un generico y es ese generico el que se le pasa a axios y ya por inferencia la respuesta es tipada de forma dinamica.
  */
}