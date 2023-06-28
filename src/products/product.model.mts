import { Category } from '../categories/categories.model.mjs'
import { BaseModel } from '../base.model.mjs'

export type Size = 'S' | 'M' | 'L' | 'XL'
export interface Product extends BaseModel{
  title: string 
  stock: number 
  sieze?: Size
  category: Category
}