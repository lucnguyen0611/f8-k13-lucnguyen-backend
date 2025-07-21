import {Column, Entity} from "typeorm";
import {BaseEntity} from "@/modules/base/entities";

@Entity('subject')
export class SubjectEntity extends BaseEntity {
  @Column({nullable: true})
  code: string

  @Column()
  name: string
}