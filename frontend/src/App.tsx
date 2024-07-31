import './App.css';
import { Header, Footer, CreateProduct } from "./component";
import { Container, Box } from '@mui/material';
//TODO: fix the footer and the style of app
function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" sx={{ direction: 'rtl' }}>
      <Header />
      <Box component="main" flexGrow={1} py={6}>
        <Container>
          <CreateProduct />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
