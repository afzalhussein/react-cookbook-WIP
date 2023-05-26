import { createBrowserRouter } from 'react-router-dom';

import { Root } from './root';
import { ErrorPage } from './error-page';

import { route as responsiveRoutesRoute } from './views/responsive-routes/route';
import { route as stateInRoutesRoute } from './views/state-in-routes/route';
import { route as transitionsWithReactTransitionGroupRoute } from './views/transitions-with-react-transition-group/route';
import { route as promptForPageExitConfirmationRoute } from './views/prompt-for-page-exit-confirmations/route';
import { route as securedRoutesRoute } from './views/secured-routes/route';
import { route as reducerForComplexStateRoute } from './views/reducer-for-complex-state/route';
import { route as measureTimeWithUseClockRoute } from './views/measure-time-with-use-clock/route';
import { route as monitorOnlineStatusRoute } from './views/monitor-online-status/route';
import { route as useMarkdownForRichContentRoute } from './views/use-markdown-for-rich-content/route';
import { route as AddKeyboardInteractionRoute } from './views/add-keyboard-interaction/route';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      responsiveRoutesRoute,
      stateInRoutesRoute,
      transitionsWithReactTransitionGroupRoute,
      promptForPageExitConfirmationRoute,
      securedRoutesRoute,
      reducerForComplexStateRoute,
      measureTimeWithUseClockRoute,
      monitorOnlineStatusRoute,
      useMarkdownForRichContentRoute,
      AddKeyboardInteractionRoute
    ]
  }
]);
