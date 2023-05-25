import { RecipeContainer } from '../../components/recipe-container';

export const StateInRoutes = () => {
  const dependencies = [{ text: 'react-router-dom', link: 'https://reactrouter.com/en/main' }];
  const links = [{ text: 'About', link: 'about' }];
  return (
    <RecipeContainer
      title="Move state into routes"
      description="move tabId state out of component and into the address bar"
      dependencies={dependencies}
      links={links}
    />
  );
};
