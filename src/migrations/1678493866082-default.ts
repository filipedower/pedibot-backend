import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678493866082 implements MigrationInterface {
    name = 'default1678493866082'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sizes" RENAME COLUMN "product_size" TO "name"`);
        await queryRunner.query(`ALTER TABLE "categories" RENAME COLUMN "product_category" TO "name"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "product_name"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "product_description"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "product_price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "description" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" numeric NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "product_price" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "product_description" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ADD "product_name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" RENAME COLUMN "name" TO "product_category"`);
        await queryRunner.query(`ALTER TABLE "sizes" RENAME COLUMN "name" TO "product_size"`);
    }

}
