import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useProductContext } from '../../context/index';

function CategorySelect() {
    const { categoryId, setCategoryId, categories } = useProductContext();

    return (
        <FormControl fullWidth margin="normal">
            <InputLabel>Category</InputLabel>
            <Select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value as string)}
                variant="outlined"
                fullWidth
            >
                {categories?.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                        {category.categoryName}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default CategorySelect;
