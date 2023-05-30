import { CentralizedErrorHandler } from '.';
import { Page } from './page';

export const route = {
  path: 'centralized-error-handler',
  element: <CentralizedErrorHandler />,
  children: [
    {
      path: 'clock-in',
      element: <Page />
    }
  ]
};

export const link = { text: 'Centralized error handler', link: '/centralized-error-handler' };
