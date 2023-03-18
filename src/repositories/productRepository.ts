import { AppDataSource } from "../data-source";
import { Product } from "../entities/Products";

export const productRepository = AppDataSource.getRepository(Product)