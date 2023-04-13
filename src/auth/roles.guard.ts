import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext } from "@nestjs/common/interfaces";
import { Observable } from "rxjs";
import { HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import { Reflector} from '@nestjs/core';
import { ROLES_KEY } from './roles-auth.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private JwtService:JwtService, private reflecrot:Reflector) {

    }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
        try {
            const requiredRoles = this.reflecrot.getAllAndOverride<string[]>(ROLES_KEY,[context.getHandler(), context.getClass()])
            if(!requiredRoles) {
                return true;
            }
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0];
            const token = authHeader.split(' ')[1];
            if(bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException({message:'Користувач не авторизований tyt'})
            }
            const user = this.JwtService.verify(token);
            req.user = user;
            return user.roles.some(role => requiredRoles.includes(role.value));
        } catch(e){
            console.log(e)
            throw new HttpException('Нема доступу', HttpStatus.FORBIDDEN)
        }
    }
}