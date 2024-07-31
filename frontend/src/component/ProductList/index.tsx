import { Grid, Typography, List, ListItem, ListItemText } from '@mui/material';
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
            <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '20vh' }}>
                <Typography variant="h6">No categories available</Typography>
            </Grid>
        );
    }

    return (
        <Grid container spacing={2}>
            {categories.map(category => (
                <Grid item xs={12} sm={6} md={3} key={category.id}>
                    <Typography variant="h6">{category.categoryName}</Typography>
                    <List>
                        {productsByCategory && productsByCategory[category.id].map((product, index) => (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={product.quantity > 1
                                        ? `${product.name} (${product.quantity})`
                                        : product.name}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            ))}
        </Grid>
    );
}

export default ProductList;
