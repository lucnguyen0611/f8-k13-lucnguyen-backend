import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {FileServiceI, DATA_SOURCE} from "@/shares";
import {FileEntity} from "@/modules/file/entities";
import {BaseService} from "@/modules/base/services";

@Injectable()
export class FileService extends BaseService<FileEntity> implements FileServiceI {

  constructor(
      // @Inject(DATA_SOURCE)
      // private dataSource: DataSource
      @Inject('FileEntityRepository')
      protected repository: Repository<FileEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
        .createQueryBuilder('file')
        .select([
          'id', 'url', 'key'
        ])
  }
}