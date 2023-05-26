import { TransitionsWithReactTransitionGroup } from '.';
import { About } from './about';
import { AboutPeople } from './about-people';
import { AboutOffices } from './about-office';

export const route = {
  path: 'transitions-with-react-transition-group',
  element: <TransitionsWithReactTransitionGroup />,
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
};

export const link = {
  text: 'Create transitions with react transition group',
  link: '/transitions-with-react-transition-group'
};
