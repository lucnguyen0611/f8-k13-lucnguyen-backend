import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { SubjectReqI } from '@/shares'

// payload / body
export class SubjectReq implements SubjectReqI {
  @ApiProperty({
    example: 'math'
  })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({
    example: '123456',
    nullable: true,
    required: false
  })
  @IsString()
  code: string
}
