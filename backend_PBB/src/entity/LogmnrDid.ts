import { Column, Entity } from "typeorm";

@Entity("LOGMNR_DID$", { schema: "PBB_KUTAI BARAT" })
export class LogmnrDid {
  @Column("numeric", { name: "SESSION#", precision: 1000, scale: 53 })
  session: string;

  @Column("numeric", {
    name: "LOGMNR_DID",
    nullable: true,
    precision: 1000,
    scale: 53,
  })
  logmnrDid: string | null;

  @Column("numeric", {
    name: "FLAGS",
    nullable: true,
    precision: 1000,
    scale: 53,
  })
  flags: string | null;

  @Column("numeric", {
    name: "SPARE1",
    nullable: true,
    precision: 1000,
    scale: 53,
  })
  spare1: string | null;

  @Column("numeric", {
    name: "SPARE2",
    nullable: true,
    precision: 1000,
    scale: 53,
  })
  spare2: string | null;

  @Column("character varying", { name: "SPARE3", nullable: true, length: 4000 })
  spare3: string | null;

  @Column("timestamp without time zone", { name: "SPARE4", nullable: true })
  spare4: Date | null;
}
