import { Deserializable } from './Deserializable';

export class Gender implements Deserializable{

    public id:number;
    public name:string;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }

}