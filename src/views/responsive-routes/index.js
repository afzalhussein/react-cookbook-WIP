import { Outlet, Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

export const ResponsiveRoutes = () => {
  return (
    <Box>
      <Typography variant="h2">Ronsponsive routes:</Typography>
      <Box component="nav" sx={{ display: 'flex' }}>
        <Link to="people">People</Link>
      </Box>
      <Outlet />
    </Box>
  );
};
