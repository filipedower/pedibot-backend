import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678569415326 implements MigrationInterface {
    name = 'default1678569415326'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "consumers" ("id" SERIAL NOT NULL, "name" text NOT NULL, "celNumber" text NOT NULL, CONSTRAINT "PK_9355367764efa60a8c2c27856d0" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "consumers"`);
    }

}
