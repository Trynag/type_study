import { UpdateProductDto } from "../../app/products/product.dto.mjs";
import { CreateProductDto } from "../dtos/product.dto";
import { Product } from "./product.model";

export interface ProductService {
  getAll(): Promise<Product[]> | Product[]
  update(id: Product['id'], changes: UpdateProductDto): Promise<Product> | Product
  create(dto: CreateProductDto): Promise<Product> | Product
  findOne(id: Product['id']): Promise<Product> | Product | undefined
}