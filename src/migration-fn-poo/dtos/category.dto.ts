import { AccessType, Category } from "../../app/categories/categories.model.mjs";
import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validateOrReject } from 'class-validator'
// Si empieza en miniscula es una funcion si empieza en MAYUSCULA es decorador 

export interface InterfaceCreateCategoryDto extends Omit<Category, 'id'> {}
export class CreateCategoryDto implements InterfaceCreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 20)
  name!: string 
  /*
    esta es una forma de definir parametros sin constructor, el '!' quiere decir, que la variable sera declarada en otro momento.
  */

  @IsUrl()
  @IsNotEmpty()
  image!: string

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined
  createdAt!: Date
  updatedAt!: Date

  constructor(
    private param: string
  ) {} //Perfectamente podemos tener ambos parametros
}

const categoryProbe = new CreateCategoryDto('param')
categoryProbe.name = 'as'     //
categoryProbe.image = 'https' // Aqui definimos las variables que no estan en el constructor

try{
  await validateOrReject(categoryProbe)
} catch (error) {
  console.log(error)
}