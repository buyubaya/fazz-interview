import { describe, expect, test } from '@jest/globals';
import { getBreadcrumbByPath } from './getBreadcrumbByPath';

describe('getBreadcrumbByPath helpers', () => {
  const SUPPORTED_KEYS_MAP: Record<string, string> = {
    '/accounts': 'home',
    '/accounts?a=b&c=d': 'home',
    '/accounts/123': 'account-detail',
    '/accounts/123?a=b&c=d': 'account-detail',
    '/bank-info': 'bank-info',
    '/bank-info?a=b&c=d': 'bank-info',
    '/user-info': 'user-info',
    '/user-info?a=b&c=d': 'user-info',
  };

  Object.keys(SUPPORTED_KEYS_MAP).forEach((path) => {
    const key = SUPPORTED_KEYS_MAP[path];

    test(`getBreadcrumbByPath(/${path}) should active`, () => {
      const breadcrumbItem = getBreadcrumbByPath(path);
      expect(breadcrumbItem).toBeDefined();

      const breadcrumbData = breadcrumbItem?.getBreadcrumbData();

      const activeBreadcrumb = breadcrumbData?.find((item) => item.key === key);
      expect(activeBreadcrumb?.isActive).toBe(true);

      const otherDatas = breadcrumbData?.filter((item) => item.key !== key);
      expect(otherDatas?.some((item) => item.isActive)).toBe(false);
    });
  });

  const UNSUPPORTED_KEYS_MAP: Record<string, string> = {
    '/not-found': 'not-found',
    '/not-found?a=b&c=d': 'not-found',
  };

  Object.keys(UNSUPPORTED_KEYS_MAP).forEach((path) => {
    test(`getBreadcrumbByPath(${path}) should NOT active`, () => {
      const breadcrumbItem = getBreadcrumbByPath(path);
      expect(breadcrumbItem).toBe(undefined);
    });
  });
});
