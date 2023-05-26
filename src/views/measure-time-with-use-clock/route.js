import { MeasureTimeWithUseClock } from './';
import { SimpleTicker } from './simple-ticker';
import { MultiTickers } from './multi-tickers';
import { IntervalTicker } from './interval-ticker';

export const route = {
  path: 'measure-time-with-use-clock',
  element: <MeasureTimeWithUseClock />,
  children: [
    {
      path: 'simple-ticker',
      element: <SimpleTicker />
    },
    {
      path: 'multi-tickers',
      element: <MultiTickers />
    },
    {
      path: 'interval-ticker',
      element: <IntervalTicker />
    }
  ]
};

export const link = { text: 'Measure time with useClock', link: '/measure-time-with-use-clock' };
