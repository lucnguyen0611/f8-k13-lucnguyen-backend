import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {FileService} from "./services";
import {ApiHeader, ApiTags } from "@nestjs/swagger";
import {FileReq} from "./dtos";
import {FileResI, FileServiceToken} from "@/shares";

@ApiTags('File')
@Controller('/file')
export class FileController {
  // dependency injection
  constructor(
    @Inject(FileServiceToken)
    private FileService: FileService
  ) {}

  @Get()
  get() {
    return this.FileService.find()
  }

  @Post()
  create(@Body() file: FileReq) {
    return this.FileService.create(file)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() file: FileReq) {
    return this.FileService.updateOne(id, file)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.FileService.softDelete(id)
  }
}