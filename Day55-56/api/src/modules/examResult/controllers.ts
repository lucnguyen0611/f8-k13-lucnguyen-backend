import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {ExamResultService} from "./services";
import {ApiHeader, ApiTags } from "@nestjs/swagger";
import {ExamResultReq} from "./dtos";
import {ExamResultResI, ExamResultServiceToken} from "@/shares";

@ApiTags('ExamResult')
@Controller('/examResult')
export class ExamResultController {
  // dependency injection
  constructor(
    @Inject(ExamResultServiceToken)
    private ExamResultService: ExamResultService
  ) {}

  @Get()
  get() {
    return this.ExamResultService.find()
  }

  @Post()
  create(@Body() examResult: ExamResultReq) {
    return this.ExamResultService.create(examResult)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() examResult: ExamResultReq) {
    return this.ExamResultService.updateOne(id, examResult)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.ExamResultService.softDelete(id)
  }
}