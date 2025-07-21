import { Entity, Column } from 'typeorm';
import {BaseEntity} from "@/modules/base/entities";

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  role: string; // Hoặc Enum nếu muốn

  @Column()
  status: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  parentName: string;

  @Column({ nullable: true })
  parentPhone: string;
}