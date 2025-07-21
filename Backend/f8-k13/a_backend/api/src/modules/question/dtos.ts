import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { QuestionReqI } from '@/shares'

export class QuestionReq implements QuestionReqI{
  @ApiProperty({ example: 1, description: 'ID đề thi' })
  @IsInt()
  examId: number;

  @ApiProperty({ example: 1, description: 'Vị trí câu hỏi trong đề (0-based)' })
  @IsInt()
  index: number;

  @ApiProperty({ example: 'multiple_choice', description: 'Loại câu hỏi: multiple_choice | fill_blank | one_choice' })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({ example: 'A,C,D', description: 'Đáp án đúng (có thể nhiều lựa chọn)' })
  @IsString()
  correctAnswer: string;

  @ApiProperty({ example: 5, description: 'ID chủ đề (topic)' })
  @IsInt()
  topicId: number;
}
