import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Categories";
import { Size } from "./Sizes";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text', nullable: false })
    name: string

    @Column({ type: 'text', nullable: false })
    description: string

    @Column({ type: 'numeric', nullable: false })
    price: number

    @ManyToMany(() => Size, size => size.products)
    sizes: Size[]

    @ManyToMany(() => Category, category => category.products)
    categories: Category[]
}