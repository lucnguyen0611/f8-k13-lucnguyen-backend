import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { JobReqI } from '@/shares'

export class JobReq implements JobReqI {
  @ApiProperty({
    example: 'Chấm bài kiểm tra cuối kỳ',
    description: 'Tên công việc'
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
