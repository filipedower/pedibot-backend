import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679506289504 implements MigrationInterface {
    name = 'default1679506289504'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_da28eb829f3ea2e9f07099d96d9"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "consumerId"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "orderValue" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "productIds" jsonb NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "obs" text`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "orderType" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "adress"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "adress" json NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "adress"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "adress" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "orderType"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "obs"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "productIds"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "orderValue"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "consumerId" integer`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "status" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_da28eb829f3ea2e9f07099d96d9" FOREIGN KEY ("consumerId") REFERENCES "consumers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
