import { IAccountFilterQuery } from '@/types/common';

export const DEFAULT_PAGESIZE = 10;

export const DEFAULT_FILTER_QUERY: IAccountFilterQuery = {
  pagination: {
    page: 1,
    pageSize: DEFAULT_PAGESIZE,
  },
};
