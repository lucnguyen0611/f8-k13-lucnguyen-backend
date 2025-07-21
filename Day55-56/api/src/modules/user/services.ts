import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {UserServiceI, DATA_SOURCE} from "@/shares";
import {UserEntity} from "@/modules/user/entities";
import {BaseService} from "@/modules/base/services";

@Injectable()
export class UserService extends BaseService<UserEntity> implements UserServiceI {

  constructor(
      // @Inject(DATA_SOURCE)
      // private dataSource: DataSource
      @Inject('UserEntityRepository')
      protected repository: Repository<UserEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
        .createQueryBuilder('user')
        .select([
          'id', 'name', 'email', 'password', 'role', 'status', 'avatar', 'parentName', 'parentPhone'
        ])
  }
}