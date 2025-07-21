import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ExamGroupReqI } from '@/shares'

export class ExamGroupReq implements ExamGroupReqI{
  @ApiProperty({ example: 'Giữa kỳ toán 9A1' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  classId: number;

  @ApiProperty({ example: '2025-08-01T08:00:00.000Z' })
  @IsDateString()
  startTime: string;

  @ApiProperty({ example: 60, description: 'Thời gian chờ trước khi bắt đầu (đơn vị: giây)' })
  @IsInt()
  waitTime: number;

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsOptional()
  isOnce: boolean;

  @ApiProperty({ example: false })
  @IsBoolean()
  @IsOptional()
  isSaveLocal: boolean;
}
