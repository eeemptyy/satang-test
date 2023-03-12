import { Radio, RadioChangeEvent, Space } from 'antd';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { listedPairs } from '../../constants/listedPairs';
import { getTicker, startTimer } from '../../store/actions';
import styles from './PairSelector.module.scss';

type RouteParams = {
  pair: string;
};

const PairSelectorTimer = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pair } = useParams<RouteParams>();
  const selectedPair =
    useSelector((state: { pair: string }) => state.pair) || pair || 'BTC_THB';

  const isRunning: boolean = useSelector(
    (state: { isRunning: boolean }) => state.isRunning
  );

  const handlePairChange = (event: RadioChangeEvent) => {
    const newPair = event.target.value;
    dispatch(getTicker(newPair));
    navigate(`/market/${newPair}`);
  };

  const handleClick = useCallback(() => {
    if (!isRunning) {
      dispatch(startTimer());
    }
  }, [dispatch, isRunning]);

  useEffect(() => {
    dispatch(getTicker(selectedPair));
    navigate(`/market/${selectedPair}`);
    handleClick();
  }, []);

  return (
    <>
      <Radio.Group
        onChange={handlePairChange}
        value={selectedPair}
        className={styles.buttonGroup}
      >
        <Space direction="vertical" className={styles.buttonWrapper}>
          {listedPairs.map((pair) => (
            <Radio.Button
              className={styles.button}
              key={pair.key}
              value={pair.key}
              onClick={handleClick}
            >
              {pair.label}
            </Radio.Button>
          ))}
        </Space>
      </Radio.Group>
    </>
  );
};

export { PairSelectorTimer };
