import { ResponsiveRoutes } from '.';
import { ResponsivePeople } from './responsive-people';
import { ResponsivePerson } from './responsive-person';

export const route = {
  path: 'responsive-routes',
  element: <ResponsiveRoutes />,
  children: [
    {
      path: 'people',
      element: <ResponsivePeople />
    },
    {
      path: 'people/:id',
      element: <ResponsivePerson />
    }
  ]
};

export const link = { text: 'Responsive routes', link: '/responsive-routes' };
