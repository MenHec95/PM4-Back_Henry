import { UserService } from './users.services';
import { createUserDto, UserResponseDto } from './user.dto';
import { idDto } from 'src/utils/DTOs/id.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(page: string, limit: string): Promise<UserResponseDto[]>;
    getUsersById(Params: idDto): Promise<UserResponseDto>;
    putUserByid(Params: idDto, updateUser: createUserDto): Promise<string>;
    deleteUserById(Params: idDto): Promise<string>;
}
