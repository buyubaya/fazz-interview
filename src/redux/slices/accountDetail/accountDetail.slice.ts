import { IGetAccountDetailResponse } from '@/apis/accountDetail/types';
import { AppRootState } from '@/redux/store';
import { IAccount } from '@/types/entity/Account/types';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getAccountDetailAction } from './accountDetail.actions';
import { IAccounnDetailReducerState } from './types';

export const ACCOUNT_DETAIL_SLICE_NAME = 'accountDetail';

const accountDetailAdapter = createEntityAdapter<IAccount>({
  selectId: (account) => account.id,
});

const initialState: IAccounnDetailReducerState = {
  statusMap: {},
  data: accountDetailAdapter.getInitialState({
    ids: [],
    entities: {},
  }),
};

const accountDetailSlice = createSlice({
  name: ACCOUNT_DETAIL_SLICE_NAME,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAccountDetailAction.pending, (state, action) => {
        state.statusMap[action.meta.arg.accountId] = 'LOADING';
      })
      .addCase(getAccountDetailAction.fulfilled, (state, action) => {
        state.statusMap[action.meta.arg.accountId] = 'SUCCESS';
        const payload = action.payload as IGetAccountDetailResponse;
        accountDetailAdapter.addOne(state.data, payload);
      })
      .addCase(getAccountDetailAction.rejected, (state, action) => {
        state.statusMap[action.meta.arg.accountId] = 'ERROR';
      });
  },
});

export const accountDetailSelectors = accountDetailAdapter.getSelectors<AppRootState>(
  (state) => state.accountDetail.data
);

const accountDetailReducer = accountDetailSlice.reducer;
export default accountDetailReducer;
