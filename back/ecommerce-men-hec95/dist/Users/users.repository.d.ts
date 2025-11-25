import { User } from './users.interface';
import { LoginDto } from 'src/auth/dto/login.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserResponseDto } from './user.dto';
export declare class UsersRepository {
    private readonly usersRepo;
    constructor(usersRepo: Repository<UserEntity>);
    getUsers(inicio: number, limite: number): Promise<UserEntity[]>;
    getUsersById(id: string): Promise<UserEntity | null>;
    createUser(user: Omit<User, 'admin'>): Promise<UserResponseDto>;
    DeleteUser(id: string): Promise<string>;
    updateUser(id: string, updateUser: Omit<User, 'admin'>): Promise<string>;
    loginvalidate(login: LoginDto): Promise<UserEntity>;
}
