export interface Product {
  name: string;
  categoryId: string;
  quantity: number;
}

export interface Category {
  id: string;
  categoryName: string;
}

export interface ProductContextType {
  productName: string;
  setProductName: (name: string) => void;
  categoryId: string;
  setCategoryId: (id: string) => void;
  productList: Product[];
  addProduct: () => void;
  categories: Category[] | null;
  clearProductList: () => void;
  submitProducts: () => Promise<void>;
  isLoading: boolean;
  isError: boolean;
  orderSuccess: boolean;
  productsQuantity: number;
}

export interface CategoriesState {
  categories: Category[] | null;
}

export interface ProductsState {
  products: Product[] | null;
  quantity: number;
}
