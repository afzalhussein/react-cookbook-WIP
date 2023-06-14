import { ManageServerStateWithReactQuery } from '.';
import { App } from './app';

export const route = {
  path: 'manage-server-state-with-react-query',
  element: <ManageServerStateWithReactQuery />,
  children: [
    {
      path: 'app',
      element: <App />
    }
  ]
};

export const link = { text: 'Manage server state with React Query', link: '/manage-server-state-with-react-query' };
