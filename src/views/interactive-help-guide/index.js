import { RecipeContainer } from '../../components/recipe-container';

export const InteractiveHelpGuide = () => {
  const dependencies = [
    {
      text: 'mui',
      link: 'https://mui.com/material-ui/'
    }
  ];
  const links = [{ text: 'App', link: 'app' }];

  return (
    <RecipeContainer
      title="Interactive help guide"
      description="a series of pop-up notes that describe how to use the various features you can see on the page"
      dependencies={dependencies}
      links={links}
    />
  );
};
