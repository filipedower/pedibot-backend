import { AppDataSource } from "../data-source";
import { Size } from "../entities/Sizes";

export const sizeRepository = AppDataSource.getRepository(Size)