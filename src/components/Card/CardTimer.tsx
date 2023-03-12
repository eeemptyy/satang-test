import { ITicker } from '../../@types/ticker';
import { useSelector } from 'react-redux';
import { Card } from './Card';

const CardTimer = (): JSX.Element => {
  const ticker: ITicker | undefined = useSelector(
    (state: { ticker: ITicker }) => state.ticker
  );

  return (
    <>
      <Card
        ticker={
          !ticker
            ? undefined
            : {
                symbol: ticker.symbol,
                lastPrice: ticker.lastPrice,
                volume: ticker.volume,
              }
        }
      />
    </>
  );
};

export { CardTimer };
