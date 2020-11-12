import { IncomesIterface } from '../interfaces/addIncomes.interface';

export class Incomes implements IncomesIterface{
    constructor(
    public amount:string,
    public  user_id:number
    ){}
}
