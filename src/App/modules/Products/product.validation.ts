import { z } from "zod";

// Zod Schema for Inventory
const inventoryValidatonSchema = z.object({
    quantity: z.number().min(0, "Quantity must be a positive number"),
    inStock: z.boolean().default(true),
});

// Zod Schema for Variants
const variantValidatonSchema = z.object({
    type: z.string().min(1, "Type is required"),
    value: z.string().min(1, "Value is required"),
});

// Zod Schema for Product
const productValidatonSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .max(30, "Product name cannot exceed 30 characters")
        .trim(),
    P_id: z.string().min(1, "P_id is required"),
    description: z.string().min(1, "Description is required"),
    price: z.number().positive("Price must be a positive number"),
    category: z.string().min(1, "Category is required"),
    tags: z.array(z.string()).nonempty("Tags are required"),
    variants: z.array(variantValidatonSchema).nonempty("Variants are required"),
    inventory: inventoryValidatonSchema.required(),
})
export default productValidatonSchema;