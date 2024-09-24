import { model, Schema } from "mongoose";
import { Torder } from "./order.interface";

// Schema
const orderSchema = new Schema<Torder> ({
    UserEmail: {
        type: String,
        required: true
    },
    P_id: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
    },
    orderQuantity:{
        type: Number,
        required: true,
    },
});

export const orderModel = model<Torder>('orders', orderSchema)