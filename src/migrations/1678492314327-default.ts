import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678492314327 implements MigrationInterface {
    name = 'default1678492314327'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sizes" ("id" SERIAL NOT NULL, "product_size" text, CONSTRAINT "PK_09ffc681886e25eb5ce3b319fab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "product_name" text NOT NULL, "product_description" text NOT NULL, "product_price" numeric NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "product_category" text NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product_size" ("product_id" integer NOT NULL, "size_id" integer NOT NULL, CONSTRAINT "PK_2bada3f3e7fb8618800cc6d746d" PRIMARY KEY ("product_id", "size_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2c5c35c613e3e028e211821f7b" ON "product_size" ("product_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_bcc87f36de7c673f3d0f5a0782" ON "product_size" ("size_id") `);
        await queryRunner.query(`CREATE TABLE "category_product" ("product_id" integer NOT NULL, "category_id" integer NOT NULL, CONSTRAINT "PK_468c4275cfb833523a5ac27a769" PRIMARY KEY ("product_id", "category_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0919bf58087db45b6e72ad4e4e" ON "category_product" ("product_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_3258d80899c96127f31dfaab87" ON "category_product" ("category_id") `);
        await queryRunner.query(`ALTER TABLE "product_size" ADD CONSTRAINT "FK_2c5c35c613e3e028e211821f7b9" FOREIGN KEY ("product_id") REFERENCES "sizes"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "product_size" ADD CONSTRAINT "FK_bcc87f36de7c673f3d0f5a0782d" FOREIGN KEY ("size_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "category_product" ADD CONSTRAINT "FK_0919bf58087db45b6e72ad4e4ee" FOREIGN KEY ("product_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "category_product" ADD CONSTRAINT "FK_3258d80899c96127f31dfaab87b" FOREIGN KEY ("category_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "category_product" DROP CONSTRAINT "FK_3258d80899c96127f31dfaab87b"`);
        await queryRunner.query(`ALTER TABLE "category_product" DROP CONSTRAINT "FK_0919bf58087db45b6e72ad4e4ee"`);
        await queryRunner.query(`ALTER TABLE "product_size" DROP CONSTRAINT "FK_bcc87f36de7c673f3d0f5a0782d"`);
        await queryRunner.query(`ALTER TABLE "product_size" DROP CONSTRAINT "FK_2c5c35c613e3e028e211821f7b9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3258d80899c96127f31dfaab87"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0919bf58087db45b6e72ad4e4e"`);
        await queryRunner.query(`DROP TABLE "category_product"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bcc87f36de7c673f3d0f5a0782"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2c5c35c613e3e028e211821f7b"`);
        await queryRunner.query(`DROP TABLE "product_size"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "sizes"`);
    }

}
