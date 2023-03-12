import Layout, { Header } from 'antd/es/layout/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { IMenuItem } from './@types/menuItem';
import { Menu } from './components/Menu';
import Home from './pages/HomePage';
import Market from './pages/MarketPage';
import styles from './App.module.scss';
import MarketSocket from './pages/MarketSocketPage';

const menus: IMenuItem[] = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/market',
    label: 'Market',
  },
  {
    path: '/market_socket',
    label: 'Market Socket',
  },
];

const App = (): JSX.Element => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Layout>
          <Header className={styles.Header}>
            <Menu menus={menus} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/market" element={<Market />} />
              <Route path="/market/:pair" element={<Market />} />
              <Route path="/market_socket" element={<MarketSocket />} />
              <Route path="/market_socket/:pair" element={<MarketSocket />} />
            </Routes>
          </Header>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
