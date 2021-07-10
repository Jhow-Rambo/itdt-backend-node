import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateInferences1625943197764 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'inferences',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'normal_image',
            type: 'varchar',
          },
          {
            name: 'inferred_image',
            type: 'varchar',
          },
          {
            name: 'inference',
            type: 'json',
          },
          {
            name: 'created_at',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('inferences');
  }
}
