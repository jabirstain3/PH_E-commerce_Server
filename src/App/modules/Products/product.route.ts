import { Router } from "express";
import { ProductControl } from "./product.controller";

const router = Router();

router.post('/RegisterProduct', ProductControl.registerProduct);

export const ProductRouter = router;
