import { Router } from "express";
import { OrderControl } from "./order.controller";

const router = Router();

router.post('/', OrderControl.createOrder);
router.get('/', OrderControl.getAllOrders);
;


export const orderRouter = router;