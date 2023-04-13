import { RolesService } from './../roles/roles.service';
import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import { User } from './user.model';
import { CreatUserDto } from './dto/create-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository:typeof User, private RolesService:RolesService){

    }
    async createUser(dto: CreatUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.RolesService.getRoleByValue("ADMIN")
        await user.$set('roles',[role.id])
        user.roles= [role]
        return user;
    }
    async getAllUsers() {
        const users = await this.userRepository.findAll({include:{all:true}});
        return users;
    }
    async getUsersByEmail(email:string) {
        const user = await this.userRepository.findOne({where:{email}, include:{all:true}});
        return user;
    }
    async addRole(dto:AddRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        const role = await this.RolesService.getRoleByValue(dto.value)
        if(role && user) {
            await user.$add('role', role.id);
            return dto
        }
        throw new HttpException('Користувач або роль не знайдені', HttpStatus.NOT_FOUND)
    }
    async ban(dto:BanUserDto) {
        const user = await this.userRepository.findByPk(dto.userId)
        if(!user) {
            throw new HttpException('Користувач не знайдений', HttpStatus.NOT_FOUND)
        }
        user.banned = true;
        user.banReason = dto.banReason;
        await user.save();
        return user;
    }
}
