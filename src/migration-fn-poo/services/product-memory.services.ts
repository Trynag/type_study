import { faker } from '@faker-js/faker';

import { Product } from '../model/product.model';
import { CreateProductDto } from '../dtos/product.dto';
import { UpdateProductDto } from '../../app/products/product.dto.mjs';
import { ProductService } from '../model/product-service.model';

export class ProductMemoryServices implements ProductService{
  constructor (
    private products: Product[] = []
  ) {}

  create (data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.datatype.uuid(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      },
    }
    return this.add( newProduct )
  }

  add (product: Product) {
    this.products.push(product)
    return product
  }

  update (id: Product['id'], changes: UpdateProductDto ): Product {
    const index = this.products.findIndex(item => item.id === id)
    const prevData = this.products[index]
    this.products[index] = {
      ...prevData,
      ...changes
    }

    return this.products[index]
  }

  findOne (id: Product['id']) {
    return this.products.find(item => item.id === id)
  }

  getAll () {
    return this.products
  }
}



// export const addProduct = (data: CreateProductDto): Product => {
//   const newProduct = {
//     ...data,
//     id: faker.datatype.uuid(),
//     category: {
//       id: data.categoryId,
//       name: faker.commerce.department(),
//       createdAt: faker.date.recent(),
//       updatedAt: faker.date.recent(),
//     }
//   }
//   products.push(newProduct);
//   return newProduct;
// }


// export const updateProduct = (id: Product['id'], changes: UpdateProductDto ): Product => {
//   const index = products.findIndex(item => item.id === id);
//   const prevData = products[index];
//   products[index] = {
//     ...prevData,
//     ...changes
//   }
//   return products[index];
// }


// export const findProducts = (dto: FindProductDto): Product[] => {
  // code
  // dto.color = 'blue';
  // dto.isNew = true;
  // dto.tags = [];
  // dto.tags?.pop();
  // dto.tags?.push();
  // return products;
// }