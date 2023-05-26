import { AnimateWithCssClasses } from './';
import { ExpandablePanel } from './expandable-panel';

export const route = {
  path: 'animate-with-css-classes',
  element: <AnimateWithCssClasses />,
  children: [
    {
      path: 'expandable-panel',
      element: <ExpandablePanel />
    }
  ]
};

export const link = { text: 'Animate with CSS classes ', link: '/animate-with-css-classes' };
