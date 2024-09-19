"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControl = void 0;
const product_service_1 = require("./product.service");
const registerProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product: productInfo } = req.body;
        // console.log(productInfo);
        const result = yield product_service_1.ProductServices.registerProductOnDB(productInfo);
        res.status(200).json({
            success: true,
            message: 'prodect registered  successfully',
            data: result,
        });
    }
    catch (error) {
        // console.log(error);
        res.status(500).json({
            success: false,
            message: 'somthing went wrong',
            data: error,
        });
    }
});
exports.ProductControl = {
    registerProduct,
};
