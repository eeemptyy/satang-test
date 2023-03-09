import { Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import { memo } from 'react';
import { useDispatch } from 'react-redux';

import { Card } from '../components/Card/Card';
import { PairSelector } from '../components/PairSelector/PairSelector';
import { stopTimer } from '../store/actions';
import styles from './Page.module.scss';

const Market = (): JSX.Element => {
  const dispatch = useDispatch();
  dispatch(stopTimer());

  return (
    <div className={styles.marketPage}>
      <Title level={2}>Exchange Market</Title>

      <Row className={styles.contentContainer}>
        <Col span={12}>
          <PairSelector />
        </Col>
        <Col span={12}>
          <div className={styles.cardContainer}>
            <Card />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default memo(Market);
