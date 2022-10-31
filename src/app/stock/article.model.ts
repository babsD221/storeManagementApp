export class Article {
    public id?: string;
    public key?: string | null ;
    public name?: string;
    public quantity?: number;
    public purchasePrice?: number;
    public sellingPrice?: number;
    public imgPath?: string;

    constructor(id?:string, name?: string, quantity?: number, purchasePrice?: number,sellingPrice?: number,imgPath?:string) {
        this.name = name;
        this.quantity = quantity;
        this.purchasePrice = purchasePrice;
        this.sellingPrice = sellingPrice;
        this.imgPath = imgPath;
    }
}