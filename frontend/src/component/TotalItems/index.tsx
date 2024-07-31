import { Typography } from '@mui/material';
import { useProductContext } from '../../context/index';

function TotalItems() {
    const { productsQuantity } = useProductContext();

    return (
        <Typography variant="h5" gutterBottom sx={{ marginTop: '30px' }}>
            סה"כ פריטים: {productsQuantity}
        </Typography>
    );
};

export default TotalItems;