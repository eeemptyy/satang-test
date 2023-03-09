import { Radio, RadioChangeEvent, Space } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { listedPairs } from '../../constants/listedPairs';
import { getTicker, startTimer } from '../../store/actions';
import styles from './PairSelector.module.scss';

type RouteParams = {
  pair: string;
};

const PairSelector = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pair = 'BTC_THB' } = useParams<RouteParams>();
  const [selectedPair, setSelectedPair] = useState<string>(pair);
  const isRunning: boolean = useSelector(
    (state: { isRunning: boolean }) => state.isRunning
  );

  useEffect(() => {
    navigate(`/market/${selectedPair}`);
    dispatch(getTicker(selectedPair));
  }, [selectedPair, navigate, dispatch]);

  const handleClick = useCallback(() => {
    if (!isRunning) {
      dispatch(startTimer());
    }
  }, [dispatch, isRunning]);

  return (
    <>
      <Radio.Group
        onChange={(e: RadioChangeEvent) => {
          setSelectedPair(e.target.value);
        }}
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

export { PairSelector };
