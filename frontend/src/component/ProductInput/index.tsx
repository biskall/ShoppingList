import React from 'react';
import { TextField } from '@mui/material';
import { useProductContext } from '../../context/index';

function ProductInput() {
  const { productName, setProductName } = useProductContext();

  return (
    <TextField
      label="מוצר חדש"
      value={productName}
      onChange={(e) => setProductName(e.target.value)}
      variant="outlined"
      fullWidth
      margin="normal"
      sx={{direction: 'rtl'}}
    />
  );
}

export default ProductInput;