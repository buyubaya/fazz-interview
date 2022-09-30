import { IListAccountInfo } from '@/apis/accountList/types';

export type Id = string | number;

export type DateString = string;

export interface IAccountFilterQuery {
  search?: Partial<Record<keyof IListAccountInfo, string>>;
  sort?: {
    field: string;
    order: SORT_TYPE | null;
  };
  dateRange?: {
    transactionDate?: [DateString, DateString];
  };
  pagination?: Pick<IPagination, 'page' | 'pageSize'>;
}

export interface IPagination {
  page: number;
  pageSize: number;
  totalCount: number;
}

export enum SORT_TYPE {
  DESC = 'DESC',
  ASC = 'ASC',
}

export enum APP_ROUTE_KEYS {
  BANK_INFO = 'BANK_INFO',
  ACCOUNT_LIST = 'ACCOUNT_LIST',
  ACCOUNT_DETAIL = 'ACCOUNT_DETAIL',
  USER_INFO = 'USER_INFO',
  NOT_FOUND = 'NOT_FOUND',
}

export interface IRouteConfigInfo {
  label?: string;
  test: RegExp;
  path: string;
  getRoute: (...args: (string | number)[]) => string;
}
