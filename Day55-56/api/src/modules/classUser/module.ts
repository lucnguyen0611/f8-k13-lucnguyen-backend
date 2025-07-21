import { Module } from '@nestjs/common';
import { ClassUserController } from './controllers';
import { ClassUserService } from "./services";
import { DataSource } from 'typeorm';
import {ClassUserServiceToken, DATA_SOURCE} from "@/shares";
import { ClassUserEntity } from "@/modules/classUser/entities";
import {DatabaseModule} from "@/database/module";

@Module({
  imports: [DatabaseModule],
  controllers: [ClassUserController],
  providers: [
    {
      provide: 'ClassUserEntityRepository',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(ClassUserEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: ClassUserServiceToken,
      useClass: ClassUserService
    }
  ],
})
export class ClassUserModule {}
