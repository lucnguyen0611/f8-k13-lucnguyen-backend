import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {ExamResultServiceI, DATA_SOURCE} from "@/shares";
import {ExamResultEntity} from "@/modules/examResult/entities";
import {BaseService} from "@/modules/base/services";

@Injectable()
export class ExamResultService extends BaseService<ExamResultEntity> implements ExamResultServiceI {

  constructor(
      // @Inject(DATA_SOURCE)
      // private dataSource: DataSource
      @Inject('ExamResultEntityRepository')
      protected repository: Repository<ExamResultEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
        .createQueryBuilder('examResult')
        .select([
          'id', 'status', 'answers', 'numberOfCorrectAnswer', 'score', 'userId', 'examId'
        ])
  }
}