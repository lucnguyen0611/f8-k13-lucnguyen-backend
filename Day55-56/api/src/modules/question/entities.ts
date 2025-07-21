import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import {BaseEntity} from "@/modules/base/entities";
import { ExamEntity } from '../exam/entities';
import { TopicEntity } from '../topic/entities';

@Entity('questions')
export class QuestionEntity extends BaseEntity {
  @Column()
  index: number;

  @Column()
  type: string;

  @Column()
  correctAnswer: string;

  @ManyToOne(() => ExamEntity)
  @JoinColumn({ name: 'exam_id' })
  examId: ExamEntity;

  @ManyToOne(() => TopicEntity)
  @JoinColumn({ name: 'topic_id' })
  topicId: TopicEntity;
}
