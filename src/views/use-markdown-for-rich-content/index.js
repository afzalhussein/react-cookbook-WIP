import { RecipeContainer } from '../../components/recipe-container';

export const UseMarkdownForRichContent = () => {
  const dependencies = [{ text: 'react-md-editor', link: 'https://github.com/uiwjs/react-md-editor' }];
  const links = [
    { text: 'Simple forum', link: 'simple-forum' },
    { text: 'Markdown forum', link: 'markdown-forum' }
  ];
  return (
    <RecipeContainer
      title="Use markdown for rich content"
      description="include formatted text, links and so forth without security flaws"
      dependencies={dependencies}
      links={links}
    />
  );
};
