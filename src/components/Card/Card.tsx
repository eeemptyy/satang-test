import { ITicker } from '../../@types/ticker';
import { useSelector } from 'react-redux';
import { Card as CardComp } from 'antd';
import styles from './Card.module.scss';

const Card = (): JSX.Element => {
  const ticker: ITicker | undefined = useSelector(
    (state: { ticker: ITicker }) => state.ticker
  );

  return (
    <>
      {ticker ? (
        <CardComp className={styles.card}>
          <div className={styles.subTitle}>
            {ticker.symbol.toUpperCase().replace('_', '/')}
          </div>
          <div className={styles.mainTitle}>{ticker.lastPrice}</div>
          <div className={styles.unimportant}>Volume: {ticker.volume}</div>
        </CardComp>
      ) : (
        <CardComp className={styles.card}>
          <div className={styles.subTitle}>{}</div>
          <div className={styles.mainTitle}>Loading...</div>
          <div className={styles.unimportant}>{}</div>
        </CardComp>
      )}
    </>
  );
};

export { Card };
