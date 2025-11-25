import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { createUserDto, UserResponseDto } from 'src/Users/user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(login: LoginDto): Promise<{
        success: string;
        Token: string;
    }>;
    signup(user: createUserDto): Promise<UserResponseDto>;
}
