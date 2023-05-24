import { Outlet, Link } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

export const Root = () => {
  return (
    <Container>
      <Typography variant="h1">React cookbook</Typography>
      <Box component="nav" sx={{ display: 'flex', alignItems: 'start' }}>
        <Link to="/responsive-routes">Responsive routes</Link>
      </Box>
      <Outlet />
    </Container>
  );
};
