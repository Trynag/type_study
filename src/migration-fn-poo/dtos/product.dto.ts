import { Category } from '../../app/categories/categories.model.mjs';
import { Product } from '../model/product.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'category'>{
  categoryId: Category['id'];
}

// export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
//   readonly tags: ReadonlyArray<string>;
// }