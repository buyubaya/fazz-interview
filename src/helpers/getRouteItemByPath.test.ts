import { APP_ROUTE_KEYS } from '@/types/common';
import { describe, expect, test } from '@jest/globals';
import { getRouteItemByPath } from './getRouteItemByPath';

describe('getRouteItemByPath helpers', () => {
  const SUPPORTED_KEYS_MAP: Record<string, string> = {
    '/accounts': APP_ROUTE_KEYS.ACCOUNT_LIST,
    '/accounts?a=b&c=d': APP_ROUTE_KEYS.ACCOUNT_LIST,
    '/accounts/123': APP_ROUTE_KEYS.ACCOUNT_DETAIL,
    '/accounts/123?a=b&c=d': APP_ROUTE_KEYS.ACCOUNT_DETAIL,
    '/bank-info': APP_ROUTE_KEYS.BANK_INFO,
    '/bank-info?a=b&c=d': APP_ROUTE_KEYS.BANK_INFO,
    '/user-info': APP_ROUTE_KEYS.USER_INFO,
    '/user-info?a=b&c=d': APP_ROUTE_KEYS.USER_INFO,
    '/not-found': APP_ROUTE_KEYS.NOT_FOUND,
    '/not-found?a=b&c=d': APP_ROUTE_KEYS.NOT_FOUND,
  };

  Object.keys(SUPPORTED_KEYS_MAP).forEach((path) => {
    test(`getRouteItemByPath(${path}).key should be ${SUPPORTED_KEYS_MAP[path]}`, () => {
      expect(getRouteItemByPath(path).key).toBe(SUPPORTED_KEYS_MAP[path]);
    });
  });
});
