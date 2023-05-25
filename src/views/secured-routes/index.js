import { RecipeContainer } from '../../components/recipe-container';

export const SecuredRoutes = () => {
  const dependencies = [{ text: 'react-router-dom', link: 'https://reactrouter.com/en/main' }];
  const links = [
    { text: 'Public', link: 'public' },
    { text: 'Private', link: 'private' }
  ];
  return (
    <RecipeContainer
      title="Secured Routes"
      description="prevent access to particular routes until a person logs in"
      dependencies={dependencies}
      links={links}
    />
  );
};
