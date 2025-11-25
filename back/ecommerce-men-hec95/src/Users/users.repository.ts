import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from './users.interface';

import { LoginDto } from 'src/auth/dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserResponseDto } from './user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepo: Repository<UserEntity>,
  ) {}

  async getUsers(inicio: number, limite: number): Promise<UserEntity[]> {
    return await this.usersRepo.find({
      skip: inicio,
      take: limite,
      relations: ['orders'],
    });
  }

  async getUsersById(id: string): Promise<UserEntity | null> {
    const userfind = await this.usersRepo.findOne({
      where: { id },
      relations: ['orders'],
    });

    return userfind;
  }

  async createUser(user: Omit<User, 'admin'>): Promise<UserResponseDto> {
    const userAdd: UserEntity = this.usersRepo.create({ ...user });

    await this.usersRepo.save(userAdd);

    userAdd.orders = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, admin, ...Rest } = userAdd;
    return Rest;
  }

  async DeleteUser(id: string): Promise<string> {
    const userFind = await this.usersRepo.findOne({ where: { id } });

    if (!userFind) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
    await this.usersRepo.remove(userFind);
    return id;
  }

  async updateUser(
    id: string,
    updateUser: Omit<User, 'admin'>,
  ): Promise<string> {
    const updateUserFind = await this.usersRepo.findOne({ where: { id } });

    if (!updateUserFind) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }

    try {
      const encriptacion: string = await bcrypt.hash(updateUser.password, 10);
      updateUser.password = encriptacion;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new BadRequestException('Error en contraseña');
      }
    }
    Object.assign(updateUserFind, updateUser);

    await this.usersRepo.save(updateUserFind);

    return id;
  }

  async loginvalidate(login: LoginDto): Promise<UserEntity> {
    const findUser = await this.usersRepo.findOne({
      where: { email: login.email },
    });
    if (findUser && (await bcrypt.compare(login.password, findUser.password)))
      return findUser;
    else
      throw new BadRequestException('El usuario o contraseña son incorrectos');
  }
}
