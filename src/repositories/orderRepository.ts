import { AppDataSource } from "../data-source";
import { Order } from "../entities/Orders";

export const orderRepository = AppDataSource.getRepository(Order)