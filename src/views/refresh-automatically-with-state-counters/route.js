import { RefreshAutomaticallyWithStateCounters } from '.';
import { UserPage } from './user-page';

export const route = {
  path: 'refresh-automatically-with-state-counters',
  element: <RefreshAutomaticallyWithStateCounters />,
  children: [
    {
      path: 'user-page',
      element: <UserPage />
    }
  ]
};

export const link = {
  text: 'Refresh automatically with state counters',
  link: '/refresh-automatically-with-state-counters'
};
