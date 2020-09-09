import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";
import { query } from "express";

const table = "appointment";

export default class AlterTableAppointmentAlterColumnProvider1597885914617
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(table, "provider");

    await queryRunner.addColumn(
      table,
      new TableColumn({
        name: "provider_id",
        type: "uuid",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      table,
      new TableForeignKey({
        name: "fk_appointment_user_id",
        columnNames: ["provider_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "user",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(table, "fk_appointment_user_id");

    await queryRunner.dropColumn(table, "provider_id");

    await queryRunner.addColumn(
      table,
      new TableColumn({
        name: "provider",
        type: "uuid",
        isNullable: true,
      })
    );
  }
}
