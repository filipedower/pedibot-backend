import { UserAdmin } from '../entities/UserAdmin'

declare global {
    namespace Express {
        export interface Request {
            user: Partial<UserAdmin>
        }
    }
}
