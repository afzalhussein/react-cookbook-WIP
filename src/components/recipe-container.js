import { Outlet, Link } from 'react-router-dom';
import { Typography, Box, Link as MuiLink } from '@mui/material';

export const RecipeContainer = ({ title, description, links, dependencies }) => {
  return (
    <Box my={1} ml={1}>
      <Typography component="h2" variant="h4">
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
        <Typography>Dependencies:</Typography>
        {dependencies?.map((d) => (
          <MuiLink key={d.link} to={d.link}>
            {d.text}
          </MuiLink>
        ))}
      </Box>
      <Box component="nav" sx={{ display: 'flex' }}>
        {links.map((l) => (
          <Link key={l.link} to={l.link}>
            {l.text}
          </Link>
        ))}
      </Box>
      <Box component="hr" />
      <Outlet />
    </Box>
  );
};
