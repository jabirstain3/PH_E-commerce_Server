import { Model } from "mongoose"


export type Torder = {
    UserEmail: string,
    P_id: string,
    price: number,
    orderQuantity: number
}

export type TorderModule = Model<Torder>