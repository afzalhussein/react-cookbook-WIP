import { InteractiveHelpGuide } from '.';
import { App } from './app';

export const route = {
  path: 'interactive-help-guide',
  element: <InteractiveHelpGuide />,
  children: [
    {
      path: 'app',
      element: <App />
    }
  ]
};

export const link = { text: 'Interactive help guide', link: '/interactive-help-guide' };
