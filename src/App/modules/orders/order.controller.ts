import { Request, Response } from "express"
import OrderValidationSchema from "./order.validation";
import { orderservices } from "./order.service";

const createOrder = async (req:Request, res:Response) => {
    try {
        const { order } = req.body;
        // console.log(order);
        
        const orderData = OrderValidationSchema.parse(order);
        const result = await orderservices.createOrderOnDB(orderData);
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json( {
            success: false,
            message: 'somthing went wrong',
            data: error,
        })
    }
}

const getAllOrders = async (req:Request, res:Response) => {
    try {
        const result = await orderservices.getAllOrdersformsDB();
        res.status(200).json( {
            success: true,
            message: 'Orders retrived  successfully!',
            totalOrders: result.length,
            data: result,
        })
    }
    catch (error){
        res.status(500).json( {
            success: false,
            message: 'somthing went wrong',
            data: error,
        })
    }
}


export const OrderControl = {
    createOrder,
    getAllOrders,
    }