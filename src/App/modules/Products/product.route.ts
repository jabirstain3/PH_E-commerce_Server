import { Router } from "express";
import { ProductControl } from "./product.controller";

const router = Router();

router.post('/RegisterProduct', ProductControl.registerProduct);
router.get('/', ProductControl.getAllProductList);
router.get('/', ProductControl.getAllProductsByKeyword);
router.get('/:productId', ProductControl.getSingleProductbyId);
router.put('/:productId', ProductControl.updateProductById);
router.delete('/:productId', ProductControl.deleteProductById);

export const ProductRouter = router;
