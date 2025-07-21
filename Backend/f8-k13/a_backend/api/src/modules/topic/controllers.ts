import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {TopicService} from "./services";
import {ApiHeader, ApiTags } from "@nestjs/swagger";
import {TopicReq} from "./dtos";
import {TopicResI, TopicServiceToken} from "@/shares";

@ApiTags('Topic')
@Controller('/topic')
export class TopicController {
  // dependency injection
  constructor(
    @Inject(TopicServiceToken)
    private TopicService: TopicService
  ) {}

  @Get()
  get() {
    return this.TopicService.find()
  }

  @Post()
  create(@Body() topic: TopicReq) {
    return this.TopicService.create(topic)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() topic: TopicReq) {
    return this.TopicService.updateOne(id, topic)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.TopicService.softDelete(id)
  }
}