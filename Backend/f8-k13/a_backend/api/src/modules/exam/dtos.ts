import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ExamReqI } from '@/shares'

export class ExamReq implements ExamReqI {
  @ApiProperty({ example: 'Đề thi giữa kỳ Toán' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'TOAN-GK-01' })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({ example: 10 })
  @IsInt()
  numberOfQuestion: number;

  @ApiProperty({ example: 2700, description: 'Tổng thời gian làm bài (giây)' })
  @IsInt()
  totalTime: number;

  @ApiProperty({ example: 'A,C,D' })
  @IsString()
  correctAnswer: string;

  @ApiProperty({ example: 'Đề thi gồm các kiến thức từ chương 1 đến chương 3', required: false })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({ example: 'PC', required: false })
  @IsOptional()
  @IsString()
  device: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  examGroupId: number;

  @ApiProperty({ example: 2 })
  @IsInt()
  classId: number;
}
