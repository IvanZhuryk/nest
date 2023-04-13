import {ApiProperty} from '@nestjs/swagger'
import { IsString } from 'class-validator';
import { IsEmail, Length } from 'class-validator/types/decorator/decorators';
export class CreatUserDto {
    @ApiProperty({example: 'user.@gmail.com', description: 'Електронная почта'})
    @IsString()
    @IsEmail({},{message:'Некоректний Email'})
    readonly email:string;
    @ApiProperty({example: '123456789', description: 'Пароль'})
    @IsString()
    @Length(4, 16, {message:'Не менше 4 і не більше 16 символів'})
    readonly password:string;
}