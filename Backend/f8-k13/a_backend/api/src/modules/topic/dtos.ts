import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TopicReqI } from '@/shares'

export class TopicReq implements TopicReqI{
  @ApiProperty({ example: 1, description: 'ID môn học' })
  @IsInt()
  subjectId: number;

  @ApiProperty({ example: 'CHUONG1' })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({ example: 'Chương 1: Đại số' })
  @IsString()
  @IsNotEmpty()
  name: string;
}
