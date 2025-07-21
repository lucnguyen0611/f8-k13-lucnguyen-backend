import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {QuestionService} from "./services";
import {ApiHeader, ApiTags } from "@nestjs/swagger";
import {QuestionReq} from "./dtos";
import {QuestionResI, QuestionServiceToken} from "@/shares";

@ApiTags('Question')
@Controller('/question')
export class QuestionController {
  // dependency injection
  constructor(
    @Inject(QuestionServiceToken)
    private QuestionService: QuestionService
  ) {}

  @Get()
  get() {
    return this.QuestionService.find()
  }

  @Post()
  create(@Body() question: QuestionReq) {
    return this.QuestionService.create(question)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() question: QuestionReq) {
    return this.QuestionService.updateOne(id, question)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.QuestionService.softDelete(id)
  }
}