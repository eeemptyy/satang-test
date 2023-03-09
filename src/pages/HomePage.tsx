import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { stopTimer } from '../store/actions';

const Home = () => {
  const dispatch = useDispatch();
  dispatch(stopTimer());

  return (
    <div>
      Currently there's nothing for you to see here.
      <br />
      Please navigate to <Link to="/market">Market</Link> page to see the test
      app or click the word "Market" to go there.
    </div>
  );
};

export default Home;
