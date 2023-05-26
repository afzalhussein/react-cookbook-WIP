import { StateInRoutes } from '.';
import { About } from './about';
import { AboutPeople } from './about-people';
import { AboutOffices } from './about-office';

export const route = {
  path: 'state-in-routes',
  element: <StateInRoutes />,
  children: [
    {
      path: 'about',
      element: <About />,
      children: [
        {
          path: 'people',
          element: <AboutPeople />
        },
        {
          path: 'offices',
          element: <AboutOffices />
        }
      ]
    }
  ]
};

export const link = { text: 'Move state in routes', link: '/state-in-routes' };
