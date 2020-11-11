import { Deserializable } from './Deserializable';


export class Article implements Deserializable{
    public id:number;
    public name:string;
    public description:string;
    public categoryId:number;
    public genderId:number;
    public brandId:number;
    public imagePath:number;
    public price:number;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }

}