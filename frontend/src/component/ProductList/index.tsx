import { Grid, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import { useProductContext } from '../../context/index';
import { Product } from '../../interfaces/types';

function ProductList() {
    const { productList, categories } = useProductContext();

    const productsByCategory = categories?.reduce((acc, category) => {
        acc[category.id] = productList.filter(product => product.categoryId === category.id);
        return acc;
    }, {} as Record<string, Product[]>);

    if (!categories || categories.length === 0) {
        return (
            <Grid container justifyContent="center" alignItems="center">
                <Typography variant="h6">עוד רגע ואנחנו עולים...</Typography>
            </Grid>
        );
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" width="100%">
            <Grid container spacing={6} md={12} justifyContent="center" >
                {categories.map(category => (
                    <Grid item xs={12} sm={6} md={2} key={category.id}>
                        <Typography variant="h6" align="center">{category.categoryName}</Typography>
                        <List>
                            {productsByCategory && productsByCategory[category.id]?.map((product, index) => (
                                <ListItem key={index} sx={{ justifyContent: 'center' }}>
                                    <ListItemText
                                        primary={product.quantity > 1
                                            ? `${product.name} (${product.quantity})`
                                            : product.name}
                                        sx={{ textAlign: 'center' }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductList;
