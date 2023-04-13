import { AuthService } from './auth.service';
import { Controller, Post, Body} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatUserDto } from 'src/users/dto/create-user.dto';

@ApiTags('Авторизація')
@Controller('auth')
export class AuthController {
    constructor(private AuthService:AuthService){

    }

    @Post('/login')
    login(@Body() userDto:CreatUserDto) {
        return this.AuthService.login(userDto)
    }
    @Post('/registration')
    registration(@Body() userDto:CreatUserDto) {
        return this.AuthService.registration(userDto)
    }
}
