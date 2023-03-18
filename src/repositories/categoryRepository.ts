import { AppDataSource } from "../data-source";
import { Category } from "../entities/Categories";

export const categoryRepository = AppDataSource.getRepository(Category)