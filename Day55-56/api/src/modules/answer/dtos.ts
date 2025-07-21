import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, IsBoolean } from 'class-validator';
import { AnswerReqI } from '@/shares'

export class AnswerReq implements AnswerReqI{
  @ApiProperty({ example: 10, description: 'ID kết quả bài làm' })
  @IsInt()
  examResultId: number;

  @ApiProperty({ example: 45, description: 'ID câu hỏi' })
  @IsInt()
  questionId: number;

  @ApiProperty({ example: 'A', description: 'Đáp án học sinh chọn (có thể là text)' })
  @IsString()
  @IsNotEmpty()
  answer: string;

  @ApiProperty({ example: true, description: 'Hệ thống chấm đúng/sai (optional)' })
  @IsOptional()
  @IsBoolean()
  isCorrect: boolean;
}
