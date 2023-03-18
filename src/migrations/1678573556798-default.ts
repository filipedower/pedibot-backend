import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678573556798 implements MigrationInterface {
    name = 'default1678573556798'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_admin" ("id" SERIAL NOT NULL, "name" text NOT NULL, "establishmentName" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, CONSTRAINT "UQ_817b0a7067f6af076d1bf65ca1d" UNIQUE ("email"), CONSTRAINT "PK_c143511e72fac735b8006051e55" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_admin"`);
    }

}
