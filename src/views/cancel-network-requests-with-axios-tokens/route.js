import { CancelNetworkRequestsWithAxiosTokens } from '.';
import { UserPostsPage } from './user-posts-page';

export const route = {
  path: 'cancel-network-requests-with-axios-tokens',
  element: <CancelNetworkRequestsWithAxiosTokens />,
  children: [
    {
      path: 'user-posts-page',
      element: <UserPostsPage />
    }
  ]
};

export const link = {
  text: 'Cancel network requests with Axios tokens',
  link: 'cancel-network-requests-with-axios-tokens'
};
