import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Consumer } from "./Consumers";

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Consumer, consumer => consumer.id)
    consumer: Consumer[]

    @Column({ type: 'numeric', nullable: false })
    status: number

    @Column({ type: 'text', nullable: false })
    adress: string

    @Column({ type: 'text', nullable: false })
    paymentType: string
}