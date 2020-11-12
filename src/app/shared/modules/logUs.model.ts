import { UserLogin } from '../interfaces/logUs.interface';

export class UserLog implements UserLogin{
    constructor(
    public email:string,
    public password:string
    ){}
}