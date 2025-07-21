import { Entity, Column } from 'typeorm';
import {BaseEntity} from "@/modules/base/entities";


@Entity('file')
export class FileEntity extends BaseEntity {
  @Column()
  url: string;

  @Column()
  key: string;
}
