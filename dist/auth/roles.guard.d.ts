import { JwtService } from '@nestjs/jwt';
import { CanActivate, ExecutionContext } from "@nestjs/common/interfaces";
import { Observable } from "rxjs";
import { Reflector } from '@nestjs/core';
export declare class RolesGuard implements CanActivate {
    private JwtService;
    private reflecrot;
    constructor(JwtService: JwtService, reflecrot: Reflector);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
