import { ReduceNetworkLoadWithDebouncedRequests } from '.';
import { UserPostsPage } from './user-posts-page';

export const route = {
  path: 'reduce-network-load-with-debounced-requests',
  element: <ReduceNetworkLoadWithDebouncedRequests />,
  children: [
    {
      path: 'user-posts-page',
      element: <UserPostsPage />
    }
  ]
};

export const link = {
  text: 'Reduce network load with debounced requests',
  link: 'reduce-network-load-with-debounced-requests'
};
