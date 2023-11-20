import { ProductModel } from "../models/ProductModel";
import prisma from "../utils/prisma";

export class ProductRepository {
    static async createProduct(
        { name, description, amount, category, supplierId, stockCurrent, stockMax, stockMin, dueDate }: ProductModel,
        userId: string
    ) {
        const product = await prisma.product.create({
            data: {
                name,
                supplierId,
                userId,
                description,
                amount,
                category,
                stockMax,
                stockMin,
                stockCurrent,
                dueDate
            },
        });

        return product;
    }

    static async findProductUser(userId: string) {
        const products = await prisma.product.findMany({
            where: { userId: userId },
        });

        return products;
    }

    static async updateProduct(data: ProductModel) {
        const product = prisma.product.update({
            where: { id: data.id },
            data: data
        });

        return product;
    }

    static async deleteProduct(idProduct: string) {
        const product = await prisma.product.delete({
            where: { id: idProduct },
        });
        return product;
    }
}
