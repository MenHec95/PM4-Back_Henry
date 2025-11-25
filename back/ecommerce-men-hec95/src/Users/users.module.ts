import { Module } from '@nestjs/common';
import { UserService } from './users.services';
import { UserController } from './users.controller';
import { UsersRepository } from './users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, UsersRepository],
  controllers: [UserController],
  exports: [UsersRepository, UserService],
})
export class UserModule {}
