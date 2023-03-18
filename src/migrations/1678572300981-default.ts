import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678572300981 implements MigrationInterface {
    name = 'default1678572300981'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD "paymentType" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "paymentType"`);
    }

}
