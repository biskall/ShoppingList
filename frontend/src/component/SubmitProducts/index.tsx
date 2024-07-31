import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useProductContext } from '../../context/index';

function SubmitProducts() {
    const { submitProducts, isLoading } = useProductContext();

    return (
        <Box display="flex" justifyContent="center" mt={4}>
            <Button
                variant="contained"
                color="error"
                onClick={submitProducts}
                disabled={isLoading}
            >
                <Typography variant="h6">
                    אשר הזמנה
                </Typography>
            </Button>
        </Box>
    );
};

export default SubmitProducts;