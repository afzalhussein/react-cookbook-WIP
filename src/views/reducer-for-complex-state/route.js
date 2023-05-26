import { ReducerForComplexState } from '.';
import { Puzzle } from './puzzle';

export const route = {
  path: 'reducer-for-complex-state',
  element: <ReducerForComplexState />,
  children: [
    {
      path: 'puzzle',
      element: <Puzzle />
    }
  ]
};

export const link = { text: 'Reducer for complex state', link: '/reducer-for-complex-state' };
