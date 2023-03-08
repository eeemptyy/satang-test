import { Col, Radio, RadioChangeEvent, Row, Space } from 'antd';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Card } from '../components/Card';
import { listedPairs } from '../constants/listedPairs';
import { getTicker } from '../store/actions';

type RouteParams = {
  pair: string;
};

const Market = (): JSX.Element => {
  const dispatch = useDispatch();
  const { pair = 'BTC_THB' } = useParams<RouteParams>();
  const [selectedPair, setSelectedPair] = useState<string>(pair);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedPair) {
      setSelectedPair(selectedPair);
      navigate(`/market/${selectedPair}`);
      dispatch(getTicker(selectedPair));
    }
  }, [selectedPair]);

  return (
    <>
      <h1>Market Component</h1>
      <Row>
        <Col span={12}>
          <Radio.Group
            onChange={(e: RadioChangeEvent) => setSelectedPair(e.target.value)}
            value={selectedPair}
          >
            <Space direction="vertical">
              {listedPairs.map((pair) => (
                <Radio.Button key={pair.key} value={pair.key}>
                  {pair.label}
                </Radio.Button>
              ))}
            </Space>
          </Radio.Group>
        </Col>
        <Col span={12}>
          <Card />
        </Col>
      </Row>
    </>
  );
};

export default Market;
