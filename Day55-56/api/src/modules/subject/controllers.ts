import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {SubjectService} from "./services";
import {ApiHeader, ApiTags } from "@nestjs/swagger";
import {SubjectReq} from "./dtos";
import {SubjectResI, SubjectServiceToken} from "@/shares";

@ApiTags('Subject')
@Controller('/subject')
export class SubjectController {
  // dependency injection
  constructor(
    @Inject(SubjectServiceToken)
    private SubjectService: SubjectService
  ) {}

  @Get()
  get() {
    return this.SubjectService.find()
  }

  @Post()
  create(@Body() subject: SubjectReq) {
    return this.SubjectService.create(subject)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() subject: SubjectReq) {
    return this.SubjectService.updateOne(id, subject)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.SubjectService.softDelete(id)
  }
}
