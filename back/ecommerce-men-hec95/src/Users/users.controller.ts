import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './users.services';
import { createUserDto, UserResponseDto } from './user.dto';
import { MiGuarda } from 'src/guards/guard';
import { idDto } from 'src/utils/DTOs/id.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/role.enum';
import { RolesGuard } from 'src/guards/role.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @HttpCode(200)
  @Get()
  @Roles(Role.Admin)
  @UseGuards(MiGuarda, RolesGuard)
  async getUsers(
    @Query('page') page: string,
    @Query('limit') limit: string,
  ): Promise<UserResponseDto[]> {
    const pageNumber = parseInt(page) || 1;
    const limitNumber = parseInt(limit) || 5;
    return await this.userService.getUsers(pageNumber, limitNumber);
  }

  @ApiBearerAuth()
  @HttpCode(200)
  @Get(':id')
  @UseGuards(MiGuarda)
  async getUsersById(@Param() Params: idDto): Promise<UserResponseDto> {
    return await this.userService.getUsersById(Params);
  }

  @ApiBearerAuth()
  @HttpCode(200)
  @Put(':id')
  @UseGuards(MiGuarda)
  async putUserByid(
    @Param() Params: idDto,
    @Body() updateUser: createUserDto,
  ): Promise<string> {
    return await this.userService.putUser(Params, updateUser);
  }

  @ApiBearerAuth()
  @HttpCode(200)
  @Delete(':id')
  @UseGuards(MiGuarda)
  async deleteUserById(@Param() Params: idDto): Promise<string> {
    return await this.userService.deleteUser(Params);
  }
}
