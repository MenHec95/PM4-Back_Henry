import { UsersRepository } from './users.repository';
import { User } from './users.interface';
import { UserResponseDto } from './user.dto';
import { idDto } from 'src/utils/DTOs/id.dto';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    getUsers(pageNumber: number, limitNumber: number): Promise<UserResponseDto[]>;
    getUsersById(id: idDto): Promise<UserResponseDto>;
    postUser(user: Omit<User, 'admin'>): Promise<UserResponseDto>;
    deleteUser(id: idDto): Promise<string>;
    putUser(id: idDto, updateUser: Omit<User, 'admin'>): Promise<string>;
}
