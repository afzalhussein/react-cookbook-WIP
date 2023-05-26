import { ConvertNetworkCallsToHooks } from '.';
import { UserPage } from './user-page';

export const route = {
  path: 'convert-network-calls-to-hooks',
  element: <ConvertNetworkCallsToHooks />,
  children: [
    {
      path: 'user-page',
      element: <UserPage />
    }
  ]
};

export const link = { text: 'Convert network calls to hooks', link: '/convert-network-calls-to-hooks' };
