import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
export declare class RolesController {
    private RolesService;
    constructor(RolesService: RolesService);
    create(dto: CreateRoleDto): Promise<import("./roles.model").Role>;
    getByValue(value: string): Promise<import("./roles.model").Role>;
}
