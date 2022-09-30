import { getAccountDetail } from '@/apis/accountDetail/getAccountDetail';
import { AppRootState } from '@/redux/store';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAccountDetailAction = createAsyncThunk(
  'accountDetail/getAccountDetail',
  async ({ accountId }: { accountId: string; force?: boolean }) => {
    const response = await getAccountDetail(accountId);

    if (response?.code !== 0) {
      throw new Error(`${response.data}`);
    }

    return response.data;
  },
  {
    condition: ({ accountId, force }, { getState }) => {
      if (force) {
        return true;
      }

      const currentState = getState() as AppRootState;

      if (currentState.accountDetail.statusMap[accountId] === 'LOADING') {
        return false;
      }

      if (currentState.accountDetail.data.ids.includes(accountId)) {
        return false;
      }

      return true;
    },
  }
);
