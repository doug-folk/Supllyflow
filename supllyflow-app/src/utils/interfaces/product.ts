export interface Product{
    id: string
    name: string;
    description: string;
    amount: number;
    category: string;
    supplierId: string;
    stockMin: string;
    stockMax: string;
    stockCurrent: string;
    createdAt: Date;
    dueDate: Date;
    updatedAt:  Date;
}
