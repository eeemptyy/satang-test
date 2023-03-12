import { Radio, RadioChangeEvent, Space } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { listedPairs } from '../../constants/listedPairs';
import { setPair } from '../../store/actions';
import styles from './PairSelector.module.scss';

type RouteParams = {
  pair: string;
};

const PairSelectorSocket = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pair } = useParams<RouteParams>();
  const selectedPair =
    useSelector((state: { pair: string }) => state.pair) || pair || 'BTC_THB';

  useEffect(() => {
    dispatch(setPair(selectedPair));
    navigate(`/market_socket/${selectedPair}`);
  }, [dispatch, navigate, selectedPair]);

  const handlePairChange = (event: RadioChangeEvent) => {
    const newPair = event.target.value;
    dispatch(setPair(newPair));
    navigate(`/market_socket/${newPair}`);
  };

  return (
    <Radio.Group
      value={selectedPair}
      onChange={handlePairChange}
      className={styles.buttonGroup}
    >
      <Space direction="vertical" className={styles.buttonWrapper}>
        {listedPairs.map((pair) => (
          <Radio.Button
            key={pair.key}
            value={pair.key}
            className={styles.button}
          >
            {pair.label}
          </Radio.Button>
        ))}
      </Space>
    </Radio.Group>
  );
};

export { PairSelectorSocket };
