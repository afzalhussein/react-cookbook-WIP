import { UseMarkdownForRichContent } from '.';
import { SimpleForum } from './forum';
import { MarkdownForum } from './markdown-forum';

export const route = {
  path: 'use-markdown-for-rich-content',
  element: <UseMarkdownForRichContent />,
  children: [
    {
      path: 'simple-forum',
      element: <SimpleForum />
    },
    {
      path: 'markdown-forum',
      element: <MarkdownForum />
    }
  ]
};

export const link = { text: 'Use markdown for rich content', link: '/use-markdown-for-rich-content' };
