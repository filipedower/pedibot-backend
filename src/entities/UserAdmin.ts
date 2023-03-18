import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_admin')
export class UserAdmin {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text', nullable: false })
    name: string

    @Column({ type: 'text', nullable: false })
    establishmentName: string

    @Column({ type: 'text', nullable: false, unique: true })
    email: string

    @Column({ type: 'text' })
    password: string
}