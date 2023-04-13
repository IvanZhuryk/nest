import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext } from "@nestjs/common/interfaces";
import { Observable } from "rxjs";
export declare class JwtAuthGuard implements CanActivate {
    private JwtService;
    constructor(JwtService: JwtService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
