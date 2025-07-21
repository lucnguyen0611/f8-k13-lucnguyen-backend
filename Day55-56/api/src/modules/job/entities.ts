import { Entity, Column } from 'typeorm';
import {BaseEntity} from "@/modules/base/entities";

@Entity('job')
export class JobEntity extends BaseEntity {
  @Column()
  name: string;
}
