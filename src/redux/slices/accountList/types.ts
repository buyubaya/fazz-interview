import { IListAccountInfo } from '@/apis/accountList/types';
import { IPagination } from '@/types/common';
import { IBankMetaData } from '@/types/entity/Bank/types';
import { EntityState } from '@reduxjs/toolkit';

export interface IAccounnListReducerState {
  status: 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';
  bankId?: string;
  data: EntityState<IListAccountInfo>;
  pagination?: IPagination;
  bankMetaData?: IBankMetaData[];
}
