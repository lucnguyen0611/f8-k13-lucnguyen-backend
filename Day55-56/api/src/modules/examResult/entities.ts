import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import {BaseEntity} from "@/modules/base/entities";
import { UserEntity } from '../user/entities';
import { ExamEntity } from '../exam/entities';

@Entity('examResult')
export class ExamResultEntity extends BaseEntity {
  @Column()
  status: string;

  @Column({ type: 'json', nullable: true })
  answers: any;

  @Column()
  numberOfCorrectAnswer: number;

  @Column()
  score: number;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  userId: UserEntity;

  @ManyToOne(() => ExamEntity)
  @JoinColumn({ name: 'exam_id' })
  examId: ExamEntity;
}
