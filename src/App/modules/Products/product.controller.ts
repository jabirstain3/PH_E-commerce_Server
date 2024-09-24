import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productValidatonSchema from "./product.validation";

const registerProduct = async (req: Request, res: Response) => {
    try {
            const {product: productInfo } = req.body;
            // console.log(productInfo);
            
            const PassedData = productValidatonSchema.parse(productInfo)
            const result = await ProductServices.registerProductOnDB(PassedData) ;
        res.status(200).json( {
            success: true,
            message: 'prodect registered  successfully!',
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

const getAllProductList = async (req: Request, res: Response) => {
    try {
        const result = await ProductServices.getAllProductListFromDB() ;
        res.status(200).json( {
            success: true,
            message: 'Prodects retrived  successfully!',
            productCount: result.length,
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
const getAllProductsByKeyword = async (req: Request, res: Response) => {
    try {
        const  Keyword  = req.query.Keyword as string ;

        if (!Keyword) {
            return res.status(400).json( {
                success: false,
                message: 'Keyword is required for searching.' ,
                data: null,
            });
        }

        const result = await ProductServices.getAllSearchedProductFromDB( Keyword ) ;
        res.status(200).json( {
            success: true,
            message: `Products matching search term ${Keyword} fetched successfully!`,
            productCount: result.length,
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

const getSingleProductbyId = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.getSingleProductFromDB(productId) ;
        res.status(200).json( {
            success: true,
            message: 'Prodect retrived  successfully!',
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

const updateProductById = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const { updatedData } = req.body;
        const result = await ProductServices.updateProductOnDB(productId, updatedData) ;
        res.status(200).json( {
            success: true,
            message: 'Prodect updated successfully!',
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

const deleteProductById = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.deletProductfromDB(productId);
        res.status(200).json( {
            success: true,
            message: 'Prodect deleted successfully!', 
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
    getAllProductList,
    getAllProductsByKeyword,
    getSingleProductbyId,
    updateProductById, 
    deleteProductById,
}