import { RolesService } from './../roles/roles.service';
import { User } from './user.model';
import { CreatUserDto } from './dto/create-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';
export declare class UsersService {
    private userRepository;
    private RolesService;
    constructor(userRepository: typeof User, RolesService: RolesService);
    createUser(dto: CreatUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUsersByEmail(email: string): Promise<User>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    ban(dto: BanUserDto): Promise<User>;
}
