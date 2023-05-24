import { createBrowserRouter } from 'react-router-dom';

import { Root } from './root';
import { ErrorPage } from './error-page';

import { ResponsiveRoutes } from './views/responsive-routes';
import { ResponsivePeople } from './views/responsive-routes/responsive-people';
import { ResponsivePerson } from './views/responsive-routes/responsive-person';

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
      }
    ]
  }
]);
