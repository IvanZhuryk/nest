"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const users_service_1 = require("./users.service");
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const swagger_1 = require("@nestjs/swagger");
const create_user_dto_1 = require("./dto/create-user.dto");
const user_model_1 = require("./user.model");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const add_role_dto_1 = require("./dto/add-role.dto");
const ban_user_dto_1 = require("./dto/ban-user.dto");
let UsersController = class UsersController {
    constructor(UsersService) {
        this.UsersService = UsersService;
    }
    create(userDto) {
        return this.UsersService.createUser(userDto);
    }
    getAll() {
        return this.UsersService.getAllUsers();
    }
    addRole(dto) {
        return this.UsersService.addRole(dto);
    }
    ban(dto) {
        return this.UsersService.ban(dto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание пользователя' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: user_model_1.User }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreatUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить всех пользователей' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: [user_model_1.User] }),
    (0, roles_auth_decorator_1.Roles)("ADMIN"),
    (0, decorators_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Видати роль' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, roles_auth_decorator_1.Roles)("ADMIN"),
    (0, decorators_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/role'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "addRole", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Забанити користувача' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, roles_auth_decorator_1.Roles)("ADMIN"),
    (0, decorators_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)('/ban'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ban_user_dto_1.BanUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "ban", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('Пользователи'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map