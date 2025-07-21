import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {ClassUserService} from "./services";
import {ApiHeader, ApiTags } from "@nestjs/swagger";
import {ClassUserReq} from "./dtos";
import {ClassUserResI, ClassUserServiceToken} from "@/shares";

@ApiTags('ClassUser')
@Controller('/classUser')
export class ClassUserController {
  // dependency injection
  constructor(
    @Inject(ClassUserServiceToken)
    private ClassUserService: ClassUserService
  ) {}

  @Get()
  get() {
    return this.ClassUserService.find()
  }

  @Post()
  create(@Body() classUser: ClassUserReq) {
    return this.ClassUserService.create(classUser)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() classUser: ClassUserReq) {
    return this.ClassUserService.updateOne(id, classUser)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.ClassUserService.softDelete(id)
  }
}
