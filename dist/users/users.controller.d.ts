import { UsersService } from './users.service';
import { CreatUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
export declare class UsersController {
    private UsersService;
    constructor(UsersService: UsersService);
    create(userDto: CreatUserDto): Promise<User>;
    getAll(): Promise<User[]>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    ban(dto: BanUserDto): Promise<User>;
}
