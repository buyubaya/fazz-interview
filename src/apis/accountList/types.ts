import { IPagination } from '@/types/common';
import { IAccount } from '@/types/entity/Account/types';
import { IBankMetaData } from '@/types/entity/Bank/types';

export interface IGetAccountListResponse {
  metaData: IBankMetaData[];
  accounts: IListAccountInfo[];
  pagination: IPagination;
}

export type IListAccountInfo = IAccount;
