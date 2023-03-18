import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Products";

@Entity('sizes')
export class Size {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text', nullable: true })
    name: string

    @ManyToMany(() => Product, product => product.sizes)
    @JoinTable({
        name: 'product_size',
        joinColumn: {
            name: 'product_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'size_id',
            referencedColumnName: 'id'
        }
    })
    products: Product[]
}