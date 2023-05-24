import { Outlet, Link } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';

export const Root = () => {
  const links = [
    { text: 'Responsive routes', link: '/responsive-routes' },
    { text: 'Move state in routes', link: '/state-in-routes' }
  ];
  return (
    <Container>
      <Typography component="h1" variant="h3">
        React cookbook
      </Typography>
      <Box component="nav" sx={{ display: 'flex', alignItems: 'start' }}>
        {links.map((l) => (
          <Button component={Link} to={l.link}>
            {l.text}
          </Button>
        ))}
      </Box>
      <Outlet />
    </Container>
  );
};
