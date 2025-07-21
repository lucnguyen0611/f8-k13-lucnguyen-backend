import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {ExamGroupServiceI, DATA_SOURCE} from "@/shares";
import {ExamGroupEntity} from "@/modules/examGroup/entities";
import {BaseService} from "@/modules/base/services";

@Injectable()
export class ExamGroupService extends BaseService<ExamGroupEntity> implements ExamGroupServiceI {

  constructor(
      // @Inject(DATA_SOURCE)
      // private dataSource: DataSource
      @Inject('ExamGroupEntityRepository')
      protected repository: Repository<ExamGroupEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
        .createQueryBuilder('examGroup')
        .select([
          'id', 'name', 'startTime', 'startTime', 'isOnce', 'isSaveLocal', 'classId'
        ])
  }
}