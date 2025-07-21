import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {ExamServiceI, DATA_SOURCE} from "@/shares";
import {ExamEntity} from "@/modules/exam/entities";
import {BaseService} from "@/modules/base/services";

@Injectable()
export class ExamService extends BaseService<ExamEntity> implements ExamServiceI {

  constructor(
      // @Inject(DATA_SOURCE)
      // private dataSource: DataSource
      @Inject('ExamEntityRepository')
      protected repository: Repository<ExamEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
        .createQueryBuilder('exam')
        .select([
          'id', 'name', 'numberOfQuestion', 'totalTime', 'correctAnswer', 'description', 'device', 'examGroupId', 'ClassId'
        ])
  }
}