import {Column, Entity} from "typeorm";
import {BaseEntity} from "@/modules/base/entities";

@Entity('classUser')
export class ClassUserEntity extends BaseEntity {
  @Column({nullable: true})
  classId: string

  @Column()
  userId: string
}