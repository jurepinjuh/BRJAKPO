import { Article } from './article';
import { Deserializable } from './Deserializable';

export class Item implements Deserializable {
    public id:number;
    public quantity:number;
    public articleId:number;
    public total:number;
    public purchaseId:number;
    public article:Article;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }

}