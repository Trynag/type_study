import { Product } from '../products/product.model.mjs'
import { User } from '../users/user.model.mjs'
import { BaseModel } from '../base.model.mjs'

export interface Order extends BaseModel {
  products: Product[]
  user: User
}