import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsOptional,
  IsString,
  IsEnum,
  IsArray,
  IsNumber
} from 'class-validator';
import { ExamResultReqI } from '@/shares'

export enum ExamResultStatus {
  DOING = 'doing',
  SUBMITTED = 'submitted',
  REVIEWED = 'reviewed'
}

export class ExamResultReq implements ExamResultReqI{
  @ApiProperty({ example: 1, description: 'ID người làm bài' })
  @IsInt()
  userId: number;

  @ApiProperty({ example: 2, description: 'ID đề thi' })
  @IsInt()
  examId: number;

  @ApiProperty({
    example: 'submitted',
    enum: ExamResultStatus,
    description: 'Trạng thái bài làm'
  })
  @IsEnum(ExamResultStatus)
  status: ExamResultStatus;

  @ApiProperty({
    example: ['A', 'C', 'B', 'true', 'Answer 1'],
    description: 'Danh sách câu trả lời',
    required: false
  })
  @IsOptional()
  @IsArray()
  answers: string[];

  @ApiProperty({ example: 7, description: 'Số câu đúng', required: false })
  @IsOptional()
  @IsInt()
  numberOfCorrectAnswer: number;

  @ApiProperty({ example: 8, description: 'Điểm số', required: false })
  @IsOptional()
  @IsNumber()
  score: number;
}
