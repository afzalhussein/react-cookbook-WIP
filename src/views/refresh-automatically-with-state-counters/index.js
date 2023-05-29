import { RecipeContainer } from '../../components/recipe-container';

export const RefreshAutomaticallyWithStateCounters = () => {
  const dependencies = [
    {
      text: 'mui',
      link: 'https://mui.com/material-ui/'
    },
    { text: '@textea/json-viewer', link: 'https://viewer.textea.io/' },
    { text: 'react-json-view', link: 'https://github.com/mac-s-g/react-json-view' },
    { text: 'JSONPlaceholder', link: 'https://jsonplaceholder.typicode.com/' }
  ];
  const links = [{ text: 'User page', link: 'user-page' }];

  return (
    <RecipeContainer
      title="Refresh automatically with state counters"
      description="trigger data refreshes by using a thing called a state version counter"
      dependencies={dependencies}
      links={links}
    />
  );
};
