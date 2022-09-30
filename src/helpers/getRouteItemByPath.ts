import { APP_ROUTES } from '@/constants/routes';
import { APP_ROUTE_KEYS, IRouteConfigInfo } from '@/types/common';

export const getRouteItemByPath = (path: string): { key: APP_ROUTE_KEYS; data: IRouteConfigInfo } => {
  const routeKey = Object.keys(APP_ROUTES).find((key) => {
    const routeItem = APP_ROUTES[key as keyof typeof APP_ROUTES];
    return routeItem.test.test(path);
  });

  return {
    key: routeKey as APP_ROUTE_KEYS,
    data: APP_ROUTES[routeKey as keyof typeof APP_ROUTES],
  };
};
