import { ITicker } from '../@types/ticker';
import { useSelector } from 'react-redux';

const Card = (): JSX.Element => {
  const ticker: ITicker | undefined = useSelector(
    (state: { ticker: ITicker }) => state.ticker
  );

  return (
    <div>
      {ticker ? (
        <>
          <div>{ticker.symbol.toUpperCase()}</div>
          <div>{ticker.lastPrice}</div>
          <div>Volume: {ticker.volume}</div>
        </>
      ) : (
        <div>No Key Select</div>
      )}
    </div>
  );
};

export { Card };
