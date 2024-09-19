import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const registerProduct = async (req: Request, res: Response) => {
    try {
            const {product: productInfo } = req.body;
            // console.log(productInfo);
            
            const result = await ProductServices.registerProductOnDB(productInfo) ;
        res.status(200).json( {
            success: true,
            message: 'prodect registered  successfully',
            data: result,
        })
    } 
    catch (error) {
        // console.log(error);
        res.status(500).json( {
            success: false,
            message: 'somthing went wrong',
            data: error,
        })
    }
}

export const ProductControl = {
    registerProduct,
}