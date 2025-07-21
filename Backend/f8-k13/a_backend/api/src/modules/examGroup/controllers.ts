import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {ExamGroupService} from "./services";
import {ApiHeader, ApiTags } from "@nestjs/swagger";
import {ExamGroupReq} from "./dtos";
import {ExamGroupResI, ExamGroupServiceToken} from "@/shares";

@ApiTags('ExamGroup')
@Controller('/examGroup')
export class ExamGroupController {
  // dependency injection
  constructor(
    @Inject(ExamGroupServiceToken)
    private ExamGroupService: ExamGroupService
  ) {}

  @Get()
  get() {
    return this.ExamGroupService.find()
  }

  @Post()
  create(@Body() examGroup: ExamGroupReq) {
    return this.ExamGroupService.create(examGroup)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() examGroup: ExamGroupReq) {
    return this.ExamGroupService.updateOne(id, examGroup)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.ExamGroupService.softDelete(id)
  }
}