import { RecipeContainer } from '../../components/recipe-container';

export const ReducerForComplexState = () => {
  const dependencies = [];
  const links = [{ text: 'Puzzle', link: 'puzzle' }];
  return (
    <RecipeContainer
      title="Use reducers to manage complex state"
      description="reducers are a way of managing complexity"
      dependencies={dependencies}
      links={links}
    />
  );
};
