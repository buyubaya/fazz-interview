import { getAccountList } from '@/apis/accountList/getAccountList';
import { AppRootState } from '@/redux/store';
import { IAccountFilterQuery } from '@/types/common';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAccountListAction = createAsyncThunk(
  'accountList/getAccountList',
  async ({ bankId, filterQuery }: { bankId: string; filterQuery?: IAccountFilterQuery; force?: boolean }) => {
    const response = await getAccountList(bankId, filterQuery);

    if (response?.code !== 0) {
      throw new Error(`${response.data}`);
    }

    return response.data;
  },
  {
    condition: ({ bankId, force }, { getState }) => {
      if (force) {
        return true;
      }

      const currentState = getState() as AppRootState;

      if (currentState.accountList.status === 'LOADING') {
        return false;
      }

      if (bankId === currentState.accountList.bankId) {
        return false;
      }

      return true;
    },
  }
);
