import { RecipeContainer } from '../../components/recipe-container';

export const MeasureTimeWithUseClock = () => {
  const dependencies = [{ text: 'Moment.js', link: 'https://momentjs.com/' }];
  const links = [
    { text: 'Simple ticker', link: 'simple-ticker' },
    {
      text: 'Multi tickers',
      link: 'multi-tickers'
    },
    {
      text: 'Interval ticker',
      link: 'interval-ticker'
    }
  ];
  return (
    <RecipeContainer
      title="Measure time with useClock"
      description="respond to the time of day"
      dependencies={dependencies}
      links={links}
    />
  );
};
