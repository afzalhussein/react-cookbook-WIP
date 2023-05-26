import { RecipeContainer } from '../../components/recipe-container';

export const AnimateWithCssClasses = () => {
  const dependencies = [];
  const links = [{ text: 'Expandable panel', link: 'expandable-panel' }];

  return (
    <RecipeContainer
      title="animate with CSS classes"
      description="animate with CSS property transition"
      dependencies={dependencies}
      links={links}
    />
  );
};
