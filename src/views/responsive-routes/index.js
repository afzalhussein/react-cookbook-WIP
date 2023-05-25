import { RecipeContainer } from '../../components/recipe-container';

export const ResponsiveRoutes = () => {
  const dependencies = [
    { text: 'react-responsive', link: 'https://github.com/contra/react-responsive' },
    { text: 'react-router-dom', link: 'https://reactrouter.com/en/main' }
  ];
  const links = [{ text: 'People', link: 'people' }];
  return (
    <RecipeContainer
      title="Ronsponsive routes"
      description="work well across all screen sizes"
      dependencies={dependencies}
      links={links}
    />
  );
};
