import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UsersRepository } from 'src/Users/users.repository';
import { UserService } from 'src/Users/users.services';

import * as bcrypt from 'bcrypt';
import { createUserDto, UserResponseDto } from 'src/Users/user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/Users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly UserService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async login(login: LoginDto): Promise<{ success: string; Token: string }> {
    let User: UserEntity;
    if (login.email && login.password)
      User = await this.userRepository.loginvalidate(login);
    else {
      throw new BadRequestException('El Email y password son obligatorios');
    }

    const userPayload = {
      sub: User.id,
      id: User.id,
      email: User.email,
      roles: User.admin,
    };
    const Token = this.jwtService.sign(userPayload);
    return { success: 'Login exitoso', Token };
  }

  async signUp(user: createUserDto): Promise<UserResponseDto> {
    if (
      !(
        user.password &&
        user.passwordRepeat &&
        user.password === user.passwordRepeat
      )
    )
      throw new BadRequestException('Las contraseñas no coinciden');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordRepeat, ...userData } = user;

    try {
      const encriptacion: string = await bcrypt.hash(user.password, 10);
      userData.password = encriptacion;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new BadRequestException('Error en contraseña');
      }
    }

    try {
      const newUser: UserResponseDto =
        await this.UserService.postUser(userData);

      return newUser;
    } catch (error: unknown) {
      const err = error as { detail?: string };
      throw new BadRequestException(err.detail || 'Error desconocido');
    }
  }
}
