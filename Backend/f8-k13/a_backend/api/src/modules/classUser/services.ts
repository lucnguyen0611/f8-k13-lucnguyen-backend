import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {ClassUserServiceI, DATA_SOURCE} from "@/shares";
import {ClassUserEntity} from "@/modules/classUser/entities";
import {BaseService} from "@/modules/base/services";

@Injectable()
export class ClassUserService extends BaseService<ClassUserEntity> implements ClassUserServiceI {

  constructor(
      // @Inject(DATA_SOURCE)
      // private dataSource: DataSource
      @Inject('ClassUserEntityRepository')
      protected repository: Repository<ClassUserEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
        .createQueryBuilder('classUser')
        .select([
          'id', 'classId', 'userId'
        ])
  }
}