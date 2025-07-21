import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { FileReqI } from '@/shares'

export class FileReq implements FileReqI {
  @ApiProperty({
    example: 'https://example.com/image.png',
    description: 'Đường dẫn URL của tệp'
  })
  @IsString()
  @IsNotEmpty()
  url: string;

  @ApiProperty({
    example: 'files/image_123abc.png',
    description: 'Khóa định danh trong hệ thống lưu trữ',
    required: false
  })
  @IsOptional()
  @IsString()
  key: string;
}
