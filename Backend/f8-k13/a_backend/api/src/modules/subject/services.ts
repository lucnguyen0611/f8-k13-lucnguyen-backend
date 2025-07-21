import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {SubjectServiceI, DATA_SOURCE} from "@/shares";
import {SubjectEntity} from "@/modules/subject/entities";
import {BaseService} from "@/modules/base/services";

@Injectable()
export class SubjectService extends BaseService<SubjectEntity> implements SubjectServiceI {

  constructor(
      // @Inject(DATA_SOURCE)
      // private dataSource: DataSource
      @Inject('SubjectEntityRepository')
      protected repository: Repository<SubjectEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
        .createQueryBuilder('subject')
        .select([
          'id', 'name', 'code'
        ])
  }
}