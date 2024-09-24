import { Tproduct } from "./product.interface";
import { productModel } from "./product.model";

const registerProductOnDB = async (product: Tproduct) => {
    const responce = await productModel.create(product);
    return responce;
}

const getAllProductListFromDB = async () => {
    const responce = await productModel.find();
    return responce;
}

const getAllSearchedProductFromDB = async (Keyword: string ) => {
    const query = {
        $or: [
            { name: new RegExp(Keyword, 'i') },       
            { description: new RegExp(Keyword, 'i') },
            { tags: { $in: [new RegExp(Keyword, 'i')] } }
        ]
    };
    const responce = await productModel.find(query);
    return responce;
}

const getSingleProductFromDB = async (id: string ) => {
    const responce = await productModel.aggregate([{$match: {P_id: {$eq: id}}}]);
    return responce;
}

const updateProductOnDB = async (id: string, updatedData: Partial<Tproduct>) => {
    const responce = await productModel.findOneAndUpdate( {P_id : id}, updatedData, { new: true, runValidators: true } ).exec();
    return responce;
}

const deletProductfromDB = async (id: string) => {
    const responce = await productModel.deleteOne({ P_id: id }).exec();
    return responce;
}

export const ProductServices ={
    registerProductOnDB,
    getAllProductListFromDB,
    getSingleProductFromDB,
    updateProductOnDB,
    deletProductfromDB,
    getAllSearchedProductFromDB,
}
