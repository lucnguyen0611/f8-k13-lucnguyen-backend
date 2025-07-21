import { Module } from '@nestjs/common';
import { TopicController } from './controllers';
import { TopicService } from "./services";
import { DataSource } from 'typeorm';
import {TopicServiceToken, DATA_SOURCE} from "@/shares";
import { TopicEntity } from "@/modules/topic/entities";
import {DatabaseModule} from "@/database/module";

@Module({
  imports: [DatabaseModule],
  controllers: [TopicController],
  providers: [
    {
      provide: 'TopicEntityRepository',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(TopicEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: TopicServiceToken,
      useClass: TopicService
    }
  ],
})
export class TopicModule {}
