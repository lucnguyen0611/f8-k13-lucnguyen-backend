import { Module } from '@nestjs/common';
import { AnswerController } from './controllers';
import { AnswerService } from './services';
import { DataSource } from 'typeorm';
import { AnswerServiceToken, DATA_SOURCE } from '@/shares';
import { AnswerEntity } from '@/modules/answer/entities';
import { DatabaseModule } from '@/database/module';

@Module({
  imports: [DatabaseModule],
  controllers: [AnswerController],
  providers: [
    {
      provide: 'AnswerEntityRepository',
      useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(AnswerEntity),
      inject: [DATA_SOURCE],
    },
    {
      provide: AnswerServiceToken,
      useClass: AnswerService,
    },
  ],
})
export class AnswerModule {}
