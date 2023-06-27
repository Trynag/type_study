import { Product } from '../products/product.model.mjs'
import { User } from '../users/user.model.mjs'

export interface Order {
  id: string | number
  createdAt: Date
  products: Product[]
  user: User
}