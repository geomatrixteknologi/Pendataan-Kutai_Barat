import { Column, Entity } from "typeorm";

@Entity("DBKB_JPB9", { schema: "PBB_KUTAI BARAT" })
export class DbkbJpb9 {
  @Column("character", { primary: true, name: "KD_PROPINSI", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "KD_DATI2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "THN_DBKB_JPB9", length: 4 })
  thnDbkbJpb9!: string;

  @Column("character", { primary: true, name: "KLS_DBKB_JPB9", length: 1 })
  klsDbkbJpb9!: string;

  @Column("numeric", { primary: true, name: "LANTAI_MIN_JPB9", precision: 2, scale: 0 })
  lantaiMinJpb9!: string;

  @Column("numeric", { primary: true, name: "LANTAI_MAX_JPB9", precision: 2, scale: 0 })
  lantaiMaxJpb9!: string;

  @Column("numeric", {
    name: "NILAI_DBKB_JPB9",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  nilaiDbkbJpb9!: string | null;
}
