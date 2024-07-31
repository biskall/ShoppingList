import { Container, Typography } from '@mui/material';
import { ProductInput, CategorySelect, AddProduct, ProductList, SubmitProducts } from "../index";
import { ProductProvider } from '../../context/index';

function CreateProduct() {
    return (
        <ProductProvider>
            <Container>
                <Typography variant="h4" gutterBottom sx={{ marginTop: '50px' }}>
                    רשימת קניות 
                </Typography>
                <ProductInput />
                <CategorySelect />
                <AddProduct />
                <Typography variant="h5" gutterBottom sx={{ marginTop: '40px', textAlign: "center" }}>
                    Product List
                </Typography>
                <ProductList />
                <SubmitProducts />
            </Container>
        </ProductProvider>
    );
}

export default CreateProduct;