import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
import React, { useState } from 'react';
import {useNavigate} from "react-router"

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
  path?:String
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    path
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('我的页面', '/home'),
    getItem('我的音乐', '1'),
    getItem('我的列表', '2'),
    getItem('我的爱好', '/about'),
  ]),
];

const Menus: React.FC = () => {
  const navigate = useNavigate()
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('1');
  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick: MenuProps['onClick'] = e => {
    navigate(e.key)
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        theme={theme}
        onClick={onClick}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default Menus;