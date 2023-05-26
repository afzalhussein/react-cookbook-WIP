import { SecuredRoutes } from '.';
import { SecurityProvider } from './security-context';
import { SecureGuard } from './secure-guard';
import { Public } from './public';
import { Private } from './private';

export const route = {
  path: 'secured-routes',
  element: <SecuredRoutes />,
  children: [
    {
      path: 'public',
      element: <Public />
    },
    {
      path: 'private',
      element: (
        <SecurityProvider>
          <SecureGuard>
            <Private />
          </SecureGuard>
        </SecurityProvider>
      )
    }
  ]
};

export const link = { text: 'Secured routes', link: '/secured-routes' };
