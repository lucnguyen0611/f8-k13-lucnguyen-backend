import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {AnswerService} from "./services";
import {ApiHeader, ApiTags } from "@nestjs/swagger";
import {AnswerReq} from "./dtos";
import {AnswerResI, AnswerServiceToken} from "@/shares";

@ApiTags('Answer')
@Controller('/answer')
export class AnswerController {
  // dependency injection
  constructor(
    @Inject(AnswerServiceToken)
    private AnswerService: AnswerService
  ) {}

  @Get()
  get() {
    return this.AnswerService.find()
  }

  @Post()
  create(@Body() answer: AnswerReq) {
    return this.AnswerService.create(answer)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() answer: AnswerReq) {
    return this.AnswerService.updateOne(id, answer)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.AnswerService.softDelete(id)
  }
}