import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

import { createUserDto, UserResponseDto } from 'src/Users/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async login(
    @Body() login: LoginDto,
  ): Promise<{ success: string; Token: string }> {
    return await this.authService.login(login);
  }
  @Post('signup')
  async signup(@Body() user: createUserDto): Promise<UserResponseDto> {
    return await this.authService.signUp(user);
  }
}
