import { APP_ROUTE_KEYS, IRouteConfigInfo } from '@/types/common';

export const APP_ROUTES: Record<APP_ROUTE_KEYS, IRouteConfigInfo> = {
  [APP_ROUTE_KEYS.BANK_INFO]: {
    label: 'Bank Info',
    test: /^\/bank-info(\?[a-zA-Z0-9-_=&]*)?$/,
    path: '/bank-info',
    getRoute: () => '/bank-info',
  },

  [APP_ROUTE_KEYS.ACCOUNT_LIST]: {
    label: 'Home',
    test: /^\/accounts(\?[a-zA-Z0-9-_=&]*)?$/,
    path: '/accounts',
    getRoute: () => '/accounts',
  },
  [APP_ROUTE_KEYS.ACCOUNT_DETAIL]: {
    test: /^\/accounts\/([a-zA-Z0-9-]+)(\?[a-zA-Z0-9-_=&]*)?$/,
    path: '/accounts/:accountId',
    getRoute: (id: string | number) => `/accounts/${id}`,
  },

  [APP_ROUTE_KEYS.USER_INFO]: {
    label: 'User Info',
    test: /^\/user-info(\?[a-zA-Z0-9-_=&]*)?$/,
    path: '/user-info',
    getRoute: () => '/user-info',
  },

  [APP_ROUTE_KEYS.NOT_FOUND]: {
    test: /^\/not-found(\?[a-zA-Z0-9-_=&]*)?$/,
    path: '/not-found',
    getRoute: () => '/not-found',
  },
};
