import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import {BaseEntity} from "@/modules/base/entities";
import { ExamResultEntity } from '../examResult/entities';
import { QuestionEntity } from '../question/entities';

@Entity('answer')
export class AnswerEntity extends BaseEntity {
  @Column()
  answer: string;

  @Column()
  isCorrect: boolean;

  @ManyToOne(() => ExamResultEntity)
  @JoinColumn({ name: 'exam_result_id' })
  examResultId: ExamResultEntity;

  @ManyToOne(() => QuestionEntity)
  @JoinColumn({ name: 'question_id' })
  questionId: QuestionEntity;
}
