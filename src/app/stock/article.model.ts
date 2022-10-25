export class Article {
    public id: number;
    public name: string;
    public quantity: number;
    public purchasePrice: number;
    public sellingPrice: number;
    public imgPath: string;

    constructor(id:number,name: string, quantity:number, purchasePrice:number,sellingPrice:number,imgPath:string) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.purchasePrice = purchasePrice;
        this.sellingPrice = sellingPrice;
        this.imgPath = imgPath;
    }
}