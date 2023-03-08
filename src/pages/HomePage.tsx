import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    Currently there's nothing for you to see here.
    <br />
    Please navigate to <Link to="/market">Market</Link> page to see the test app
    or click the word "Market" to go there.
  </div>
);

export default Home;
