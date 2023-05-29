import { RecipeContainer } from '../../components/recipe-container';

export const CancelNetworkRequestsWithAxiosTokens = () => {
  const dependencies = [
    {
      text: 'mui',
      link: 'https://mui.com/material-ui/'
    },
    { text: 'Axios', link: 'https://github.com/axios/axios' },
    { text: '@textea/json-viewer', link: 'https://viewer.textea.io/' },
    { text: 'react-json-view', link: 'https://github.com/mac-s-g/react-json-view' },
    { text: 'JSONPlaceholder', link: 'https://jsonplaceholder.typicode.com/' }
  ];
  const links = [{ text: 'User posts page', link: 'user-posts-page' }];

  return (
    <RecipeContainer
      title="Cancel network requests with Axios tokens"
      description="cancel old calls before sending new ones"
      dependencies={dependencies}
      links={links}
    />
  );
};
