import Box from '@mui/material/Box';

function Footer() {

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
        </Box>
    );
}

export default Footer;
