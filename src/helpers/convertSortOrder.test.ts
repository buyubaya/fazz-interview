import { SORT_TYPE } from '@/types/common';
import { describe, expect, test } from '@jest/globals';
import { antdSortOrderToApiSortOrder, apiSortOrderToAntdSortOrder } from './convertSortOrder';

describe('convertSortOrder helpers', () => {
  test('apiSortOrderToAntdSortOrder(null) should be null', () => {
    expect(apiSortOrderToAntdSortOrder(null)).toBe(null);
  });

  test('apiSortOrderToAntdSortOrder(DESC) should be descend', () => {
    expect(apiSortOrderToAntdSortOrder(SORT_TYPE.DESC)).toBe('descend');
  });

  test('apiSortOrderToAntdSortOrder(ASC) should be ascend', () => {
    expect(apiSortOrderToAntdSortOrder(SORT_TYPE.ASC)).toBe('ascend');
  });

  test('antdSortOrderToApiSortOrder(null) should be null', () => {
    expect(antdSortOrderToApiSortOrder(null)).toBe(null);
  });

  test('antdSortOrderToApiSortOrder(descend) should be DESC', () => {
    expect(antdSortOrderToApiSortOrder('descend')).toBe(SORT_TYPE.DESC);
  });

  test('antdSortOrderToApiSortOrder(ascend) should be DESC', () => {
    expect(antdSortOrderToApiSortOrder('ascend')).toBe(SORT_TYPE.ASC);
  });
});
