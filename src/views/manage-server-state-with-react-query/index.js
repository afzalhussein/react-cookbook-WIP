import { RecipeContainer } from '../../components/recipe-container';

export const ManageServerStateWithReactQuery = () => {
  const dependencies = [
    { text: 'react-query', link: 'https://tanstack.com/query/' }
    // { text: 'react-query-devtools', link: 'https://transtack.com/' },
    // { text: '@tanstack/eslint-plugin-query', link: 'https://transtack.com/' }
  ];
  const links = [{ text: 'App', link: 'app' }];

  return (
    <RecipeContainer
      title="Manage server state with React Query"
      description="it makes fetching, caching, synchronizing and updating server state in the web applications a breeze"
      dependencies={dependencies}
      links={links}
    />
  );
};
