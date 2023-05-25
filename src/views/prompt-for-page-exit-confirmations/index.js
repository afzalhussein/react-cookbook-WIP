import { RecipeContainer } from '../../components/recipe-container';

export const PromptForPageExitConfirmation = () => {
  const dependencies = [
    { text: 'react-router-dom', link: 'https://reactrouter.com/en/main' },
    { text: 'react-router-prompt', link: 'https://github.com/sshyam-gupta/react-router-prompt' }
  ];
  const links = [{ text: 'Exit confirm page', link: 'exit-confirm-page' }];
  return (
    <RecipeContainer
      title="Prompt for page exit confirmations"
      description="ask a user to confirm that they want to leave a page if they’re in the middle of editing something"
      dependencies={dependencies}
      links={links}
    />
  );
};
