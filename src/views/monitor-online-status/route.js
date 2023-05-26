import { MonitorOnlineStatus } from './';
import { NetworkChecker } from './network-checker';

export const route = {
  path: 'monitor-online-status',
  element: <MonitorOnlineStatus />,
  children: [
    {
      path: 'network-checker',
      element: <NetworkChecker />
    }
  ]
};

export const link = { text: 'Monitor online status', link: '/monitor-online-status' };
