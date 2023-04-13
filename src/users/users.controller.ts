import { UsersService } from './users.service';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger'
import { CreatUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
    constructor(private UsersService:UsersService) {

    }
    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status:200, type:User})
    @Post()
    create(@Body() userDto:CreatUserDto) {
        return this.UsersService.createUser(userDto)
    }
    @ApiOperation({summary: 'Получить всех пользователей'})
    @ApiResponse({status:200, type:[User]})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.UsersService.getAllUsers()
    }
    @ApiOperation({summary: 'Видати роль'})
    @ApiResponse({status:200})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto:AddRoleDto) {
        return this.UsersService.addRole(dto)
    }
    @ApiOperation({summary: 'Забанити користувача'})
    @ApiResponse({status:200})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/ban')
    ban(@Body() dto:BanUserDto) {
        return this.UsersService.ban(dto)
    }
}
