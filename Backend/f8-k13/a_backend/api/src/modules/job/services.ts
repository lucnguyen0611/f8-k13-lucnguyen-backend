import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {JobServiceI, DATA_SOURCE} from "@/shares";
import {JobEntity} from "@/modules/job/entities";
import {BaseService} from "@/modules/base/services";

@Injectable()
export class JobService extends BaseService<JobEntity> implements JobServiceI {

  constructor(
      // @Inject(DATA_SOURCE)
      // private dataSource: DataSource
      @Inject('JobEntityRepository')
      protected repository: Repository<JobEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
        .createQueryBuilder('job')
        .select([
          'id', 'name'
        ])
  }
}