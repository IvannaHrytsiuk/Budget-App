import { User } from '../interfaces/user.interface';

export class UserMod implements User{
    constructor(
    public firstName:string,
    public lastName: string,
    public email:string,
    public password:string,
    public balance:string,
    public roles:Array<any>
    ,
    ){}
}