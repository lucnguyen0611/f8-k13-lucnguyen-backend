import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import {BaseEntity} from "@/modules/base/entities";
import { ExamGroupEntity } from '../examGroup/entities';
import { ClassEntity } from '../classes/entities';

@Entity('exams')
export class ExamEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  numberOfQuestion: number;

  @Column()
  totalTime: number;

  @Column()
  correctAnswer: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  device: string;

  @ManyToOne(() => ExamGroupEntity)
  @JoinColumn({ name: 'exam_group_id' })
  examGroupId: ExamGroupEntity;

  @ManyToOne(() => ClassEntity)
  @JoinColumn({ name: 'class_id' })
  classId: ClassEntity;
}
