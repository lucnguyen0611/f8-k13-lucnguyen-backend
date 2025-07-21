import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {JobService} from "./services";
import {ApiHeader, ApiTags } from "@nestjs/swagger";
import {JobReq} from "./dtos";
import {JobResI, JobServiceToken} from "@/shares";

@ApiTags('Job')
@Controller('/job')
export class JobController {
  // dependency injection
  constructor(
    @Inject(JobServiceToken)
    private JobService: JobService
  ) {}

  @Get()
  get() {
    return this.JobService.find()
  }

  @Post()
  create(@Body() job: JobReq) {
    return this.JobService.create(job)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() job: JobReq) {
    return this.JobService.updateOne(id, job)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.JobService.softDelete(id)
  }
}