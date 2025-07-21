import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {UserService} from "./services";
import {ApiHeader, ApiTags } from "@nestjs/swagger";
import {UserReq} from "./dtos";
import {UserResI, UserServiceToken} from "@/shares";

@ApiTags('User')
@Controller('/user')
export class UserController {
  // dependency injection
  constructor(
    @Inject(UserServiceToken)
    private UserService: UserService
  ) {}

  @Get()
  get() {
    return this.UserService.find()
  }

  @Post()
  create(@Body() user: UserReq) {
    return this.UserService.create(user)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() user: UserReq) {
    return this.UserService.updateOne(id, user)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.UserService.softDelete(id)
  }
}