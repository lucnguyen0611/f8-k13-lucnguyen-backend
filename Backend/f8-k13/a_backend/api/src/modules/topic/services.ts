import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {TopicServiceI, DATA_SOURCE} from "@/shares";
import {TopicEntity} from "@/modules/topic/entities";
import {BaseService} from "@/modules/base/services";

@Injectable()
export class TopicService extends BaseService<TopicEntity> implements TopicServiceI {

  constructor(
      // @Inject(DATA_SOURCE)
      // private dataSource: DataSource
      @Inject('TopicEntityRepository')
      protected repository: Repository<TopicEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
        .createQueryBuilder('topic')
        .select([
          'id', 'name', 'code', 'subjectId'
        ])
  }
}