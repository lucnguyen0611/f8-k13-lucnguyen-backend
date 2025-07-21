import { Module } from '@nestjs/common';
import { ExamResultController } from './controllers';
import { ExamResultService } from "./services";
import { DataSource } from 'typeorm';
import {ExamResultServiceToken, DATA_SOURCE} from "@/shares";
import { ExamResultEntity } from "@/modules/examResult/entities";
import {DatabaseModule} from "@/database/module";

@Module({
  imports: [DatabaseModule],
  controllers: [ExamResultController],
  providers: [
    {
      provide: 'ExamResultEntityRepository',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(ExamResultEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: ExamResultServiceToken,
      useClass: ExamResultService
    }
  ],
})
export class ExamResultModule {}
