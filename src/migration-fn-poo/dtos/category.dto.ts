import { AccessType, Category } from "../../app/categories/categories.model.mjs";
import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validateOrReject } from 'class-validator'
// Si empieza en miniscula es una funcion si empieza en MAYUSCULA es decorador 

export interface InterfaceCreateCategoryDto extends Omit<Category, 'id'> {}
export class CreateCategoryDto implements InterfaceCreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 20)
  name!: string

  @IsUrl()
  @IsNotEmpty()
  image!: string

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined
  createdAt!: Date
  updatedAt!: Date
}

const categoryProbe = new CreateCategoryDto()
categoryProbe.name = 'as'
categoryProbe.image = 'https'

try{
  await validateOrReject(categoryProbe)
} catch (error) {
  console.log(error)
}