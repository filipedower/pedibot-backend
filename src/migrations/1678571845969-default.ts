import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678571845969 implements MigrationInterface {
    name = 'default1678571845969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "status" numeric NOT NULL, "adress" text NOT NULL, "consumerId" integer, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_da28eb829f3ea2e9f07099d96d9" FOREIGN KEY ("consumerId") REFERENCES "consumers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_da28eb829f3ea2e9f07099d96d9"`);
        await queryRunner.query(`DROP TABLE "orders"`);
    }

}
