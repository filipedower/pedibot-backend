import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { AdressProps, ProductIdProps } from "../@types/productId";
import { Consumer } from "./Consumers";

@Entity('orders')
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'numeric', nullable: false })
    orderValue: number

    @Column({ type: 'jsonb', nullable: false })
    productIds: ProductIdProps[]

    @Column({ type: 'text', nullable: true })
    obs: string

    @Column({ type: 'text', nullable: false })
    orderType: string

    @Column({ type: 'text', nullable: false })
    paymentType: string

    @Column({ type: 'json', nullable: false })
    adress: AdressProps
}