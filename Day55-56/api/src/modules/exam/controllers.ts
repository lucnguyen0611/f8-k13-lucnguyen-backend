import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {ExamService} from "./services";
import {ApiHeader, ApiTags } from "@nestjs/swagger";
import {ExamReq} from "./dtos";
import {ExamResI, ExamServiceToken} from "@/shares";

@ApiTags('Exam')
@Controller('/exam')
export class ExamController {
  // dependency injection
  constructor(
    @Inject(ExamServiceToken)
    private ExamService: ExamService
  ) {}

  @Get()
  get() {
    return this.ExamService.find()
  }

  @Post()
  create(@Body() exam: ExamReq) {
    return this.ExamService.create(exam)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() exam: ExamReq) {
    return this.ExamService.updateOne(id, exam)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.ExamService.softDelete(id)
  }
}