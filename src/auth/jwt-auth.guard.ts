import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext } from "@nestjs/common/interfaces";
import { Observable } from "rxjs";
import { Injectable, UnauthorizedException} from '@nestjs/common';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private JwtService:JwtService) {

    }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
        try {
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0];
            const token = authHeader.split(' ')[1];
            if(bearer !== 'Bearer' || !token) {
                throw new UnauthorizedException({message:'Користувач не авторизований tyt'})
            }
            const user = this.JwtService.verify(token);
            req.user = user;
            return true;
        } catch(e){
            console.log(e)
            throw new UnauthorizedException({message:'Користувач не авторизований n'})
        }
    }
}