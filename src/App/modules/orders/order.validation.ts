import { z } from "zod";

const OrderValidationSchema = z.object({
    UserEmail: z.string().email('Invalid email format'),
    P_id: z.string().min(1, "P_id is required"),
    price: z.number().positive("Price must be a positive number"),
    orderQuantity:z.number().min(1, 'Order quantity must be at least 1'),
});

export default OrderValidationSchema;