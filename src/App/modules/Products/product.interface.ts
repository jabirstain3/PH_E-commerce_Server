import { Model } from "mongoose";

export type Tinventory = {
    quantity:number,
    inStock:boolean
};

export type Tvariant = {
    type: string,
    value: string
};

export type Tproduct = {
    name: string,
    P_id: string,
    description: string,
    price: number,
    category: string,
    tags: string[],
    variants: Tvariant[],
    inventory: Tinventory
}

export type TproductModel = Model<Tproduct>