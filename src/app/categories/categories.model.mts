import { BaseModel } from '../base.model.mjs'

export enum AccessType {
  PRIVATE = 'private',
  PUBLIC = 'public'
}
export interface Category extends BaseModel{
  name: string
  image: string
  access ?: AccessType
}