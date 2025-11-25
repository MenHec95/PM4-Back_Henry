import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './users.interface';
import { UserResponseDto } from './user.dto';
import { idDto } from 'src/utils/DTOs/id.dto';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUsers(
    pageNumber: number,
    limitNumber: number,
  ): Promise<UserResponseDto[]> {
    const limite = limitNumber;
    const inicio = (pageNumber - 1) * limite;
    if (limite < 0 || inicio < 0)
      throw new BadRequestException('Paginacion incorrecta');
    const Users = await this.usersRepository.getUsers(inicio, limite);

    const allUsers = Users.map((usuario) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...rest } = usuario;

      return rest;
    });
    return allUsers;
  }

  async getUsersById(id: idDto): Promise<UserResponseDto> {
    const User = await this.usersRepository.getUsersById(id.id);
    if (!User) {
      throw new NotFoundException('Usuario no encontrado');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, admin, ...rest } = User;
    return rest;
  }

  async postUser(user: Omit<User, 'admin'>): Promise<UserResponseDto> {
    return await this.usersRepository.createUser(user);
  }

  async deleteUser(id: idDto): Promise<string> {
    const userDelete = await this.usersRepository.DeleteUser(id.id);
    return `El Usuario con ID: ${userDelete} se elimino`;
  }

  async putUser(id: idDto, updateUser: Omit<User, 'admin'>): Promise<string> {
    try {
      const userUpdate = await this.usersRepository.updateUser(
        id.id,
        updateUser,
      );

      return `El usuario con Id: ${userUpdate} se actualizo`;
    } catch (error: unknown) {
      const err = error as { detail?: string };
      throw new BadRequestException(err.detail || 'Error Desconocido');
    }
  }
}
