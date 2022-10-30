export class Order {
    public product_name?: string;
    public clientName?: string ;
    public quantity?: number;
    public details?: string;
    public product_imgPath?: string;
    public sellingPrice?: number;
    public address?: string;
    public phoneNumber?: string;
    public key?: string | null;
    public date?: string;

    constructor(name?: string ,clientName?:string, qty?:number, imgPath?:string, price?: number, place?: string,details?: string, phoneNumber?:string ,date?: string) {
        this.product_name = name;
        this.clientName = clientName;
        this.quantity =qty;
        this.product_imgPath = imgPath;
        this.sellingPrice = price;
        this.address = place;
        this.details = details;
        this.phoneNumber = phoneNumber;
        this.date = date;
    }
}
