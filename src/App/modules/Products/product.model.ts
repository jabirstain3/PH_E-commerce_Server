import { Schema, model} from "mongoose";
import { Tinventory, Tproduct, Tvariant } from "./product.interface";

// Schema
const inventorySchema = new Schema<Tinventory> ({
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        default: true,
    }
});

const variantSchema = new Schema<Tvariant> ({
    type: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    }
});

const productSchema = new Schema <Tproduct> (
    {
        name: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            maxlength: [30, ""]
        },
        P_id: {
            type: String,
            unique:true,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        buyingPrice: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        tags: {
            type: [String],
            required: true,
        },
        variants: {
            type: [variantSchema],
            required: true,
        },
        inventory: {
            type: inventorySchema,
            required: true,
        }
    }
);

// middlewere
// productSchema.pre('create', function (next) {
//     this.find({p_id: {$ne:}})
// })

// model
export const productModel = model<Tproduct>('product', productSchema)