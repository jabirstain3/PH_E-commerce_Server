import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRouter } from "./App/modules/Products/product.route";
import { orderRouter } from "./App/modules/orders/order.route";

const app: Application = express();

//  Perser
app.use(express.json());
app.use(cors());

// Application router
app.use('/api/products', ProductRouter)
app.use('/api/orders', orderRouter)

app.get('/', (req: Request, res: Response ) => {
    res.send('Product server is running perfectly')
})

export default app;