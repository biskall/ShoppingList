import React from 'react';
import { Button } from '@mui/material';
import { useProductContext } from '../../context/index';

function AddProduct() {
    const { addProduct } = useProductContext();

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={addProduct}
            fullWidth
        >
            Add Product
        </Button>
    );
}

export default AddProduct;
