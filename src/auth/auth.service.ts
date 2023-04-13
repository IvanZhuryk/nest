import { UsersService } from './../users/users.service';
import { Injectable, HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreatUserDto } from 'src/users/dto/create-user.dto';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/user.model';

@Injectable()
export class AuthService {
    constructor(private UsersService:UsersService, private jwtService:JwtService) {

    }
    
    async login(userDto:CreatUserDto) {
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }
    async registration(userDto:CreatUserDto) {
        const candidate = await this.UsersService.getUsersByEmail(userDto.email);
        if (candidate) {
            throw new HttpException('Користувач з таким email вже існує ', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.UsersService.createUser({...userDto, password:hashPassword})
        return this.generateToken(user)
    }
    private async generateToken(user:User) {
        const payload = {email: user.email, id:user.id, roles:user.roles}
        return{
            token: this.jwtService.sign(payload)
        }
    }
    private async validateUser(userDto:CreatUserDto) {
        const user =  await this.UsersService.getUsersByEmail(userDto.email);
        const passwordEquals = await bcrypt.compare(userDto.password, user.password)
        if(user && passwordEquals) {
            return user;
        }
        throw new UnauthorizedException({message:'email або пароль не пароль'})
    }
}
