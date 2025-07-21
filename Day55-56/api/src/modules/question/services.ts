import {Inject, Injectable } from "@nestjs/common";
import {Column, DataSource, JoinColumn, ManyToOne, Repository, SelectQueryBuilder} from 'typeorm';
import {QuestionServiceI, DATA_SOURCE} from "@/shares";
import {QuestionEntity} from "@/modules/question/entities";
import {BaseService} from "@/modules/base/services"
@Injectable()
export class QuestionService extends BaseService<QuestionEntity> implements QuestionServiceI {

  constructor(
      // @Inject(DATA_SOURCE)
      // private dataSource: DataSource
      @Inject('QuestionEntityRepository')
      protected repository: Repository<QuestionEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
        .createQueryBuilder('question')
        .select([
          'id', 'index', 'type', 'correctAnswer', 'examId', 'topicId',
        ])
  }
}