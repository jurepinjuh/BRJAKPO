import { Deserializable } from './Deserializable';

export class Category implements Deserializable{
    public id:number;
    public categoryName:number;
    deserialize(input: any): this {
        return Object.assign(this, input);
    }
    
}