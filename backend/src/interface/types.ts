export interface Category {
  id: string | undefined;
  categoryName: string | undefined;
}

export interface Product {
  name: string;
  categoryId: string;
  quantity: number;
}
