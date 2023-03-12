import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { stopTimer } from '../store/actions';
import Title from 'antd/es/typography/Title';
import styles from './page.module.scss';

const Home = () => {
  const dispatch = useDispatch();
  dispatch(stopTimer());

  return (
    <div className={styles.homePage}>
      <Title level={2}>
        A test application build for Frontend Developer at Satang
      </Title>
      <Title level={4}> brief description of the test</Title>
      <ol>
        <li>
          Build an Exchange Market containing 3 button and one detail card
        </li>
        <li>
          Each button represents a cypto currency pair able to click to change
          value in detail card
        </li>
        <li>
          For problem no.1, Detail card will auto refresh every 5 seconds{' '}
          <Link to="/market/BTC_THB">Check at Market Page</Link>
        </li>
        <li>
          For Problem no.2, Using websocket instead of auto refresh{' '}
          <Link to="/market_socket/BTC_THB">Check at Market Socket Page</Link>
        </li>
      </ol>
    </div>
  );
};

export default Home;
