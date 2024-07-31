import React from 'react';
import { Button, Typography } from '@mui/material';
import { useProductContext } from '../../context/index';

function AddProduct() {
    const { addProduct } = useProductContext();

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={addProduct}
            fullWidth
            sx={{ marginTop: '20px' }}
        >
            <Typography variant="h5">
                הוסף מוצר
            </Typography>
        </Button>
    );
}

export default AddProduct;
