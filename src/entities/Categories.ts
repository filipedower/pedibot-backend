import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Products";

@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text', nullable: false })
    name: string

    @ManyToMany(() => Product, product => product.categories)
    @JoinTable({
        name: 'category_product',
        joinColumn: {
            name: 'product_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'category_id',
            referencedColumnName: 'id'
        }
    })
    products: Product[]
}