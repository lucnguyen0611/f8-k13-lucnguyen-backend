import { Module } from '@nestjs/common';
import { QuestionController } from './controllers';
import { QuestionService } from "./services";
import { DataSource } from 'typeorm';
import {QuestionServiceToken, DATA_SOURCE} from "@/shares";
import { QuestionEntity } from "@/modules/question/entities";
import {DatabaseModule} from "@/database/module";

@Module({
  imports: [DatabaseModule],
  controllers: [QuestionController],
  providers: [
    {
      provide: 'QuestionEntityRepository',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(QuestionEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: QuestionServiceToken,
      useClass: QuestionService
    }
  ],
})
export class QuestionModule {}
