import { Deserializable } from "./Deserializable";

export class Brand implements Deserializable{
    public id:number;
    public brandName:string;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }

}