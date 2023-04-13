import { AuthService } from './auth.service';
import { CreatUserDto } from 'src/users/dto/create-user.dto';
export declare class AuthController {
    private AuthService;
    constructor(AuthService: AuthService);
    login(userDto: CreatUserDto): Promise<{
        token: string;
    }>;
    registration(userDto: CreatUserDto): Promise<{
        token: string;
    }>;
}
