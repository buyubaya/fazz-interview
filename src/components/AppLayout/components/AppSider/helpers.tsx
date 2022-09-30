import { APP_ROUTES } from '@/constants/routes';
import { getRouteItemByPath } from '@/helpers/getRouteItemByPath';
import { APP_ROUTE_KEYS } from '@/types/common';
import { BankOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import React from 'react';
import { Link } from 'react-router-dom';
import { SIDE_MENU_ITEM_KEYS } from './constants';

export const getAppSiderMenu = (): ItemType[] => {
  return [
    {
      key: SIDE_MENU_ITEM_KEYS.BANK_INFO,
      icon: <BankOutlined />,
      label: <Link to={APP_ROUTES.BANK_INFO.getRoute()}>Bank Info</Link>,
      className: 'active',
    },
    {
      key: SIDE_MENU_ITEM_KEYS.ACCOUNTS,
      icon: <TeamOutlined />,
      label: <Link to={APP_ROUTES.ACCOUNT_LIST.getRoute()}>Accounts</Link>,
    },
    {
      key: SIDE_MENU_ITEM_KEYS.USER_INFO,
      icon: <UserOutlined />,
      label: <Link to={APP_ROUTES.USER_INFO.getRoute()}>User Info</Link>,
    },
  ];
};

export const getSelectedSideBarMenuKey = (pathname: string) => {
  const routeInfo = getRouteItemByPath(pathname);

  const mapPathSiderKey: Record<string, string> = {
    [APP_ROUTE_KEYS.BANK_INFO]: SIDE_MENU_ITEM_KEYS.BANK_INFO,
    [APP_ROUTE_KEYS.ACCOUNT_LIST]: SIDE_MENU_ITEM_KEYS.ACCOUNTS,
  };

  return [mapPathSiderKey[routeInfo.key || '']];
};
