export type Size = 'S' | 'M' | 'L' | 'XL'
export type Product = {
  title: string
  readonly createdAt: Date 
  stock: number 
  sieze?: Size
}