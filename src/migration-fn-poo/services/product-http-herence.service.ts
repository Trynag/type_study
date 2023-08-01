import { Product } from "../model/product.model";
import { BaseHttpService } from "./base-http.service";

export class ProductHttpService extends BaseHttpService<Product> { 
  otro() {
    this.url
  }
}

/*
  Cabe aclarar que los genericos se extienden tambien y para esto, agregamos una herencia normal pero el generico tiene que ser definido por parametro de tipo, en este caso Product
*/