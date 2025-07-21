import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import {BaseEntity} from "@/modules/base/entities";
import { SubjectEntity } from '../subject/entities';

@Entity('topic')
export class TopicEntity extends BaseEntity {
  @Column()
  code: string;

  @Column()
  name: string;

  @ManyToOne(() => SubjectEntity)
  @JoinColumn({ name: 'subject_id' })
  subjectId: SubjectEntity;
}
