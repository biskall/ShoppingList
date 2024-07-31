import { Container, Typography, Grid } from '@mui/material';
import { ProductInput, CategorySelect, AddProduct, ProductList, SubmitProducts, TotalItems } from "../index";
import { ProductProvider } from '../../context/index';

function CreateProduct() {
    return (
        <ProductProvider>
            <Container sx={{ marginTop: '20px' }}>
                <TotalItems></TotalItems>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <ProductInput />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <CategorySelect />
                    </Grid>
                </Grid>
                <AddProduct/>
                <Typography variant="h5" gutterBottom sx={{ marginTop: '30px', marginBottom: '20px',textAlign: "center" }}>
                    סל הקניות שלי 
                </Typography>
                <ProductList />
                <SubmitProducts />
            </Container>
        </ProductProvider>
    );
}

export default CreateProduct;