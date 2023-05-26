import { RecipeContainer } from '../../components/recipe-container';

export const AddKeyboardInteraction = () => {
  const dependencies = [];
  const links = [{ text: 'Rotate with keyboard', link: 'rotate-with-keyboard' }];

  return (
    <RecipeContainer
      title="Add keyboard interaction"
      description="create a key-linstener hook to listen for keydown events only at the document level"
      dependencies={dependencies}
      links={links}
    />
  );
};
