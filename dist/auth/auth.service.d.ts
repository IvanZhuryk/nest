import { UsersService } from './../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreatUserDto } from 'src/users/dto/create-user.dto';
export declare class AuthService {
    private UsersService;
    private jwtService;
    constructor(UsersService: UsersService, jwtService: JwtService);
    login(userDto: CreatUserDto): Promise<{
        token: string;
    }>;
    registration(userDto: CreatUserDto): Promise<{
        token: string;
    }>;
    private generateToken;
    private validateUser;
}
