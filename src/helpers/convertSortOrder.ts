import { SORT_TYPE } from '@/types/common';
import { SortOrder } from 'antd/es/table/interface';

export const apiSortOrderToAntdSortOrder = (apiSortOrder: SORT_TYPE | null): SortOrder => {
  if (!apiSortOrder) {
    return null;
  }

  const map: Record<SORT_TYPE, SortOrder> = {
    [SORT_TYPE.DESC]: 'descend',
    [SORT_TYPE.ASC]: 'ascend',
  };

  return map[apiSortOrder] || null;
};

export const antdSortOrderToApiSortOrder = (antdSortOrder: SortOrder): SORT_TYPE | null => {
  if (!antdSortOrder) {
    return null;
  }

  const map = {
    descend: SORT_TYPE.DESC,
    ascend: SORT_TYPE.ASC,
  };

  return map[antdSortOrder] || null;
};
