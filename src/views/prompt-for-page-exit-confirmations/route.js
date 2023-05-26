import { PromptForPageExitConfirmation } from '.';
import { ExitConfirmPage } from './exit-confirm-page';

export const route = {
  path: 'prompt-for-page-exit-confirms',
  element: <PromptForPageExitConfirmation />,
  children: [
    {
      path: 'exit-confirm-page',
      element: <ExitConfirmPage />
    }
  ]
};

export const link = { text: 'Prompt for page exit confirmations', link: '/prompt-for-page-exit-confirms' };
