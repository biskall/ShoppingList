import { createContext, useContext, useState, ReactNode, useEffect, useMemo } from 'react';
import { Product, ProductContextType, Category } from '../../interfaces/types';
import { useGetCategoriesQuery, useOrderProductsMutation, getProductsQuantity, getCategories, RootState, productsActions } from '../../redux/index';
import { useSelector, useDispatch } from 'react-redux';


const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
    children: ReactNode;
}

export function ProductProvider({ children }: ProductProviderProps) {
    const [productName, setProductName] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [productList, setProductList] = useState<Product[]>([]);
    useGetCategoriesQuery();
    const dispatch = useDispatch();
    const [orderProducts, { isLoading, isError, isSuccess: orderSuccess }] = useOrderProductsMutation();
    const categories = useSelector((state: RootState) => getCategories(state));
    const productsQuantity = useSelector((state: RootState) => getProductsQuantity(state));

    const addProduct = () => {
        const isExistProduct = productList.find(prod => prod.categoryId === categoryId && prod.name === productName);

        if (isExistProduct) {
            const updatedProductList = productList.map(prod =>
                prod.categoryId === categoryId && prod.name === productName
                    ? { ...prod, quantity: prod.quantity + 1 }
                    : prod
            );
            setProductList(updatedProductList);
            dispatch(productsActions.countTotalItems({ quantity: 1 }));
        } else if (productName && categoryId) {
            setProductList([...productList, { name: productName, categoryId, quantity: 1 }]);
            dispatch(productsActions.countTotalItems({ quantity: 1 }));
        }
        setProductName('');
        setCategoryId('');
    };

    const clearProductList = () => {
        setProductList([]);
    };

    const submitProducts = async () => {
        try {
            await orderProducts({ products: productList });
            clearProductList();
        } catch (error) {
            alert('Failed to submit products.');
        }
    };

    return (
        <ProductContext.Provider value={{ productName, setProductName, categoryId, setCategoryId, productList, addProduct, categories, clearProductList, submitProducts, isLoading, isError, orderSuccess, productsQuantity }}>
            {children}
        </ProductContext.Provider>
    );
}

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProduct must be used within a ProductProvider');
    }
    return context;
}
