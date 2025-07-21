import {Entity, Column, ManyToOne, JoinColumn} from 'typeorm';
import {BaseEntity} from "@/modules/base/entities";
import {ClassEntity} from "@/modules/classes/entities";

@Entity('examGroup')
export class ExamGroupEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  startTime: Date;

  @Column()
  waitTime: number;

  @Column({ default: false })
  isOnce: boolean;

  @Column({ default: false })
  isSaveLocal: boolean;

  @ManyToOne(() => ClassEntity)
  @JoinColumn({ name: 'class_id' })
  classId: ClassEntity;
}