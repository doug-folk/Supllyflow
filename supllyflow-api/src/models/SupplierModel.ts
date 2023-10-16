export type SupplierModel = {
    id: string;
  name: string;
  contact: String;
  description: String;
  category: String;
  user: User;
  userId: String;
  products: Product[];
}
