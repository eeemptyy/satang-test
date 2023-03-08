import { default as MenuComp } from 'antd/es/menu';
import { Link, useLocation } from 'react-router-dom';

import { IMenuItem } from '../@types/menuItem';

interface MenuProps {
  menus: IMenuItem[];
}

const Menu = ({ menus }: MenuProps): JSX.Element => {
  const location = useLocation();
  let defaultMenuKey = [location.pathname.split('/')[1]];
  if (defaultMenuKey[0] === '') {
    defaultMenuKey = ['home'];
  }

  return (
    <MenuComp
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={defaultMenuKey}
      items={menus.map((menu: IMenuItem) => {
        return {
          key: menu.label.toLowerCase(),
          label: <Link to={menu.path}>{menu.label}</Link>,
        };
      })}
    />
  );
};

export { Menu };
