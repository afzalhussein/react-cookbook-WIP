import { RecipeContainer } from '../../components/recipe-container';

export const MonitorOnlineStatus = () => {
  const dependencies = [];
  const links = [{ text: 'Network checker', link: 'network-checker' }];
  return (
    <RecipeContainer
      title="Monitor online status"
      description="check the network connection"
      dependencies={dependencies}
      links={links}
    />
  );
};
