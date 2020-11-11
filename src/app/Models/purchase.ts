import { Deserializable } from "./Deserializable";

export class Purchase implements Deserializable{

    public id:number;
    public billingName:string;
    public billingSurname:string;
    public billingPhone:string;
    public billingAdress:string;
    public userId:number;
    public dateOfPurchase:Date;
    public price:number;
    public deliveryName:string;
    public deliverySurname:string;
    public deliveryEmail:string;
    public deliveryAdress:string;
    public remark:string;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }

}