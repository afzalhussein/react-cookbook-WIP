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

import { TransitionsWithReactTransitionGroup } from './views/transitions-with-react-transition-group';
import { About as TransitionsAbout } from './views/transitions-with-react-transition-group/about';
import { AboutPeople as TransitionsAboutPeople } from './views/transitions-with-react-transition-group/about-people';
import { AboutOffices as TransitionsAboutOffices } from './views/transitions-with-react-transition-group/about-office';

import { PromptForPageExitConfirmation } from './views/prompt-for-page-exit-confirmations';
import { ExitConfirmPage } from './views/prompt-for-page-exit-confirmations/exit-confirm-page';

import { SecuredRoutes } from './views/secured-routes';
import { SecureGuard } from './views/secured-routes/secure-guard';
import { SecurityProvider } from './views/secured-routes/security-context';
import { Public } from './views/secured-routes/public';
import { Private } from './views/secured-routes/private';

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
      },
      {
        path: 'transitions-with-react-transition-group',
        element: <TransitionsWithReactTransitionGroup />,
        children: [
          {
            path: 'about',
            element: <TransitionsAbout />,
            children: [
              {
                path: 'people',
                element: <TransitionsAboutPeople />
              },
              {
                path: 'offices',
                element: <TransitionsAboutOffices />
              }
            ]
          }
        ]
      },
      {
        path: 'prompt-for-page-exit-confirms',
        element: <PromptForPageExitConfirmation />,
        children: [
          {
            path: 'exit-confirm-page',
            element: <ExitConfirmPage />
          }
        ]
      },
      {
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
      }
    ]
  }
]);
