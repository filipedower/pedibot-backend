import { AppDataSource } from "../data-source";
import { Consumer } from "../entities/Consumers";

export const consumerRepository = AppDataSource.getRepository(Consumer)