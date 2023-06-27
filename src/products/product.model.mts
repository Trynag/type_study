import { Category } from '../categories/categories.model.mjs'

export type Size = 'S' | 'M' | 'L' | 'XL'
export interface Product {
  title: string
  readonly createdAt: Date 
  stock: number 
  sieze?: Size
  category: Category
}