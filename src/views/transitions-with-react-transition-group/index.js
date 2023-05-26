import { RecipeContainer } from '../../components/recipe-container';

export const TransitionsWithReactTransitionGroup = () => {
  const dependencies = [
    { text: 'react-router-dom', link: 'https://reactrouter.com/en/main' },
    { text: 'react-transition-group', link: '' }
  ];
  const links = [{ text: 'About', link: 'about' }];
  return (
    <RecipeContainer
      title="Create transitions with react-transition-group"
      description="use animation to connect different elements visually"
      dependencies={dependencies}
      links={links}
    />
  );
};
