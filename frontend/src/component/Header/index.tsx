import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {

  return (
    <AppBar position="fixed" >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          רשימת קניות
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
