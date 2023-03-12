import { Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import { memo } from 'react';
import { useDispatch } from 'react-redux';

import { CardTimer } from '../components/Card/CardTimer';
import { PairSelectorTimer } from '../components/PairSelector/PairSelectorTimer';
import { stopTimer } from '../store/actions';
import styles from './Page.module.scss';

const Market = (): JSX.Element => {
  const dispatch = useDispatch();
  dispatch(stopTimer());

  return (
    <div className={styles.marketPage}>
      <Title level={2}>Exchange Market (with Timer)</Title>

      <Row className={styles.contentContainer}>
        <Col span={12}>
          <PairSelectorTimer />
        </Col>
        <Col span={12}>
          <div className={styles.cardContainer}>
            <CardTimer />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default memo(Market);
