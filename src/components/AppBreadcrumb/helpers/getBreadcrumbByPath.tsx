import { APP_ROUTES } from '@/constants/routes';
import { getRouteItemByPath } from '@/helpers/getRouteItemByPath';
import { APP_ROUTE_KEYS } from '@/types/common';
import { IAppReadcrumbConfigInfo } from '../types';

const BREADCRUMB_DATA: Partial<Record<APP_ROUTE_KEYS, IAppReadcrumbConfigInfo>> = {
  [APP_ROUTE_KEYS.ACCOUNT_LIST]: {
    getBreadcrumbData: () => [
      {
        key: 'home',
        label: APP_ROUTES.ACCOUNT_LIST.label,
        href: '',
        isActive: true,
      },
    ],
  },
  [APP_ROUTE_KEYS.ACCOUNT_DETAIL]: {
    getBreadcrumbData: ({ accountId } = {}) => [
      {
        key: 'home',
        label: APP_ROUTES.ACCOUNT_LIST.label,
        href: APP_ROUTES.ACCOUNT_LIST.path,
      },
      {
        key: 'account-detail',
        label: `Account ${accountId ?? 'Detail'}`,
        isActive: true,
      },
    ],
  },
  [APP_ROUTE_KEYS.BANK_INFO]: {
    getBreadcrumbData: () => [
      {
        key: 'home',
        label: 'Home',
        href: '/accounts',
      },
      {
        key: 'bank-info',
        label: 'Bank Info',
        isActive: true,
      },
    ],
  },
  [APP_ROUTE_KEYS.USER_INFO]: {
    getBreadcrumbData: () => [
      {
        key: 'home',
        label: 'Home',
        href: '/accounts',
      },
      {
        key: 'user-info',
        label: 'User Info',
        isActive: true,
      },
    ],
  },
};

export const getBreadcrumbByPath = (pathname: string) => {
  const routeInfo = getRouteItemByPath(pathname);
  const breadcrumb = BREADCRUMB_DATA[routeInfo.key];
  return breadcrumb;
};
