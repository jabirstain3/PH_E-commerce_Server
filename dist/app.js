"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./App/modules/Products/product.route");
const app = (0, express_1.default)();
//  Perser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Application router
app.use('/api/Products', product_route_1.ProductRouter);
app.get('/', (req, res) => {
    res.send('Product server is running perfectly');
});
exports.default = app;
