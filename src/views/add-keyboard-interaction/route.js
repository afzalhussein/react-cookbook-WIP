import { AddKeyboardInteraction } from '.';
import { RotateWithKeyboard } from './RotateWithKeyboard';

export const route = {
  path: 'add-keyboard-interaction',
  element: <AddKeyboardInteraction />,
  children: [
    {
      path: 'rotate-with-keyboard',
      element: <RotateWithKeyboard />
    }
  ]
};

export const link = { text: 'Add keyboard interaction', link: '/add-keyboard-interaction' };
