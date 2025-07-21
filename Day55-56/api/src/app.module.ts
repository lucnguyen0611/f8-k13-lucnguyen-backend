import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '@/database/module';
import { ClassModule } from '@/modules/classes/module';
import { SubjectModule } from '@/modules/subject/module';
import { UserModule } from '@/modules/user/module';
import { ClassUserModule } from '@/modules/classUser/module';
import { ExamGroupModule } from '@/modules/examGroup/module';
import { ExamModule } from '@/modules/exam/module';
import { QuestionModule } from '@/modules/question/module';
import { AnswerModule } from '@/modules/answer/module';
import { ExamResultModule } from '@/modules/examResult/module';
import { TopicModule } from '@/modules/topic/module';
import { FileModule } from '@/modules/file/module';
import { JobModule } from '@/modules/job/module';

@Module({
  imports: [
    DatabaseModule,
    ClassModule,
    SubjectModule,
    UserModule,
    ClassUserModule,
    ExamGroupModule,
    ExamModule,
    QuestionModule,
    AnswerModule,
    ExamResultModule,
    TopicModule,
    FileModule,
    JobModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
