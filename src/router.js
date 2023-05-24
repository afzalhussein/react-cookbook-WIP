import { createBrowserRouter } from 'react-router-dom';

import { Root } from './root';
import { ErrorPage } from './error-page';

import { ResponsiveRoutes } from './views/responsive-routes';
import { ResponsivePeople } from './views/responsive-routes/responsive-people';
import { ResponsivePerson } from './views/responsive-routes/responsive-person';

import { StateInRoutes } from './views/state-in-routes';
import { About } from './views/state-in-routes/about';
import { AboutPeople } from './views/state-in-routes/about-people';
import { AboutOffices } from './views/state-in-routes/about-office';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
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
      },
      {
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
      }
    ]
  }
]);
