import React from 'react';
import { Button } from '@mui/material';
import { useProductContext } from '../../context/index';

function SubmitProducts () {
    const { submitProducts, isLoading } = useProductContext();

    return (
        <Button
            variant="contained"
            color="error"
            onClick={submitProducts}
            disabled={isLoading}
        >
            Submit Products
        </Button>
    );
};

export default SubmitProducts;