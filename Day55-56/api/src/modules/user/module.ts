import { Module } from '@nestjs/common';
import { UserController } from './controllers';
import { UserService } from "./services";
import { DataSource } from 'typeorm';
import {UserServiceToken, DATA_SOURCE} from "@/shares";
import { UserEntity } from "@/modules/user/entities";
import {DatabaseModule} from "@/database/module";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    {
      provide: 'UserEntityRepository',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: UserServiceToken,
      useClass: UserService
    }
  ],
})
export class UserModule {}
