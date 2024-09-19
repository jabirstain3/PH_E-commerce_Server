import { Tproduct } from "./product.interface";
import { productModel } from "./product.model";

const registerProductOnDB = async (product: Tproduct) => {
    const responce = productModel.create(product);
    return responce;
}

export const ProductServices ={
    registerProductOnDB,
}
