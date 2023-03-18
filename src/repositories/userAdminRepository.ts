import { AppDataSource } from "../data-source";
import { UserAdmin } from "../entities/UserAdmin";

export const userAdminRepository = AppDataSource.getRepository(UserAdmin)