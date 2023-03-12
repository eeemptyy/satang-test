import { Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import { memo } from 'react';
import { useDispatch } from 'react-redux';

import { CardSocket } from '../components/Card/CardSocket';
import { PairSelectorSocket } from '../components/PairSelector/PairSelectorSocket';
import { stopTimer } from '../store/actions';
import styles from './page.module.scss';

const MarketSocket = (): JSX.Element => {
  const dispatch = useDispatch();
  dispatch(stopTimer());

  return (
    <div className={styles.marketPage}>
      <Title level={2}>Exchange Market (with Socket)</Title>

      <Row className={styles.contentContainer}>
        <Col span={12}>
          <PairSelectorSocket />
        </Col>
        <Col span={12}>
          <div className={styles.cardContainer}>
            <CardSocket />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default memo(MarketSocket);
