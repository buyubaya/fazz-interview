import { IAccountDetail } from '@/apis/accountDetail/types';
import { EntityState } from '@reduxjs/toolkit';

export interface IAccounnDetailReducerState {
  statusMap: {
    [accountId: string]: 'LOADING' | 'SUCCESS' | 'ERROR';
  };
  data: EntityState<IAccountDetail>;
}
