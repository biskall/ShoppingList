import { Typography } from '@mui/material';
import { useProductContext } from '../../context/index';

function TotalItems() {
    const { productList } = useProductContext();

    const totalQuantity = productList?.reduce((acc, product) => acc + product.quantity, 0) ?? 0;

    return (
        <Typography variant="h5" gutterBottom sx={{ marginTop: '30px' }}>
            סה"כ פריטים: {totalQuantity}
        </Typography>
    );
};

export default TotalItems;