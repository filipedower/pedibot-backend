import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('consumers')
export class Consumer {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text', nullable: false })
    name: string

    @Column({ type: 'text', nullable: false })
    celNumber: string
}