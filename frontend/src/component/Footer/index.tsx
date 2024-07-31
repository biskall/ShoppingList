import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

function Footer() {
    const theme = useTheme();

    return (
        <Box component="footer" sx={{
            backgroundColor: "#333",
            color: "#fff",
            textAlign: "center",
            padding: "20px",
            position: "relative",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
        }}>
            <Typography variant="body1">
                {'Footer Content'}
            </Typography>
        </Box>
    );
}

export default Footer;
