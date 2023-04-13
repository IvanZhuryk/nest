import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { User } from "src/users/user.model";
import { Role } from "./roles.model";


@Table({tableName: 'user_roles', createdAt:false, updatedAt:false})
export class UserRoles extends Model <UserRoles> {
    @Column({type:DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})
    id:number;
    @ForeignKey(()=> Role)
    @Column({type:DataType.INTEGER})
    roleid: number;
    @ForeignKey(()=> User)
    @Column({type:DataType.INTEGER})
    userid:number;
}