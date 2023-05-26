import { RecipeContainer } from '../../components/recipe-container';

export const ConvertNetworkCallsToHooks = () => {
  const dependencies = [];
  const links = [{ text: 'User page', link: 'user-page' }];

  return (
    <RecipeContainer
      title="Convert network calls to hooks"
      description="moving network requests into React hooks to track whether a network request is still underway or if there has been some error that prevented it from succeeding"
      dependencies={dependencies}
      links={links}
    />
  );
};
