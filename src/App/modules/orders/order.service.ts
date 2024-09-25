import { Torder } from "./order.interface"
import { orderModel } from "./order.model"

const createOrderOnDB = async ( orderdata: Torder ) => {
    const responce = await orderModel.create(orderdata);
    return responce;
}
const getAllOrdersformsDB = async () => {
    const responce = await orderModel.find();
    return responce;
}
const getUserOrdersformsDB = async ( email: string ) => {
    const responce = await orderModel.aggregate([ {$match: { UserEmail: {$eq: email} }} ]);
    return responce;
}

export const orderservices = {
    createOrderOnDB,
    getAllOrdersformsDB, 
    getUserOrdersformsDB,
}