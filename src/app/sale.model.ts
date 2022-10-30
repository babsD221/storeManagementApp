export class Sale {
    public name?: string | null;
    public quantity?: number;
    public sellingPrice?: number;
    public imgPath?: string | null;
    public clientName?: string;
    public clientAddress?: string;
    public phoneNumber?: string;
    public orderDetails?: string;
    public details?: string;
    public key?: string | null;

    constructor(name?:string,imgPath?:string | null, quantity?:number, sellingPrice?:number,clientName?: string, address?: string, phoneNumber?:string, details?: string) {
        this.name = name;
        this.quantity = quantity;
        this.sellingPrice = sellingPrice;
        this.clientName = clientName;
        this.clientAddress = address;
        this.phoneNumber = phoneNumber;
        this.imgPath = imgPath;
        this.orderDetails = details;
        this.details = details;
    }
}
