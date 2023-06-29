import { BaseModel } from '../base.model.mjs'
import { Category } from '../categories/categories.model.mjs'

export type Size = 'S' | 'M' | 'L' | 'XL'
export type Color = `#${string}`

export interface Product extends BaseModel{
  title: string 
  image: string
  description: string
  stock: number 
  sieze?: Size
  color: Color
  price: number
  category: Category
  isNew: boolean
  tags: string[]
}