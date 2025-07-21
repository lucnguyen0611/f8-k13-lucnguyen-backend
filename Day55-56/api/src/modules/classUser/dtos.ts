import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { ClassUserReqI } from '@/shares'

// payload / body
export class ClassUserReq implements ClassUserReqI {
  @ApiProperty({
    example: '1'
  })
  @IsNumber()
  classId: number

  @ApiProperty({
    example: '2',
  })
  @IsNumber()
  userId: number
}
