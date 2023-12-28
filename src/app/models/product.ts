import { Url } from "node:url";

export class Product {
    public id: number;
    public name: string;
    public description: string;
    // public image: Url;

    constructor(id: number, name: string, description: string, image: Url){
        this.id =id;
        this.name =name;
        this.description=description;
        // this.image = image;
    }
}
