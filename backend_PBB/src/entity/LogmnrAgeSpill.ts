import { Column, Entity } from "typeorm";

@Entity("LOGMNR_AGE_SPILL$", { schema: "PBB_KUTAI BARAT" })
export class LogmnrAgeSpill {
  @Column("numeric", { name: "SESSION#", precision: 1000, scale: 53 })
  session!: string;

  @Column("numeric", { name: "XIDUSN", precision: 1000, scale: 53 })
  xidusn!: string;

  @Column("numeric", { name: "XIDSLT", precision: 1000, scale: 53 })
  xidslt!: string;

  @Column("numeric", { name: "XIDSQN", precision: 1000, scale: 53 })
  xidsqn!: string;

  @Column("numeric", { name: "CHUNK", precision: 1000, scale: 53 })
  chunk!: string;

  @Column("numeric", { name: "SEQUENCE#", precision: 1000, scale: 53 })
  sequence!: string;

  @Column("numeric", {
    name: "OFFSET",
    nullable: true,
    precision: 1000,
    scale: 53,
  })
  offset!: string | null;

  @Column("bytea", { name: "SPILL_DATA", nullable: true })
  spillData!: Buffer | null;

  @Column("numeric", {
    name: "SPARE1",
    nullable: true,
    precision: 1000,
    scale: 53,
  })
  spare1!: string | null;

  @Column("numeric", {
    name: "SPARE2",
    nullable: true,
    precision: 1000,
    scale: 53,
  })
  spare2!: string | null;

  @Column("numeric", { name: "PDBID", precision: 1000, scale: 53 })
  pdbid!: string;
}
