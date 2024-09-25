import { Router } from "express";
import { ProductControl } from "./product.controller";

const router = Router();

router.post('/', ProductControl.registerProduct);
router.get('/', ProductControl.getAllProductList);
router.get('/product', ProductControl.getAllProductsByKeyword);
router.get('/:productId', ProductControl.getSingleProductbyId);
router.put('/:productId', ProductControl.updateProductById);
router.delete('/:productId', ProductControl.deleteProductById);

export const ProductRouter = router;
