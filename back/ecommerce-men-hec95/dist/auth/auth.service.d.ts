import { LoginDto } from './dto/login.dto';
import { UsersRepository } from 'src/Users/users.repository';
import { UserService } from 'src/Users/users.services';
import { createUserDto, UserResponseDto } from 'src/Users/user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private UserService;
    private readonly jwtService;
    constructor(userRepository: UsersRepository, UserService: UserService, jwtService: JwtService);
    login(login: LoginDto): Promise<{
        success: string;
        Token: string;
    }>;
    signUp(user: createUserDto): Promise<UserResponseDto>;
}
