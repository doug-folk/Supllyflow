export type ProductModel = {
    id: string
    name: string;
    description: string;
    amount: number;
    category: string;
    supplierId: string;
    stockMin: number;
    stockMax: number;
    stockCurrent: number;
    dueDate: Date;
    createdAt: Date;
    updatedAt:  Date;
}
