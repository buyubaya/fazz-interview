import { IGetAccountListResponse, IListAccountInfo } from '@/apis/accountList/types';
import { AppRootState } from '@/redux/store';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getAccountListAction } from './accountList.actions';
import { IAccounnListReducerState } from './types';

export const ACCOUNT_LIST_SLICE_NAME = 'accountList';

const accountListAdapter = createEntityAdapter<IListAccountInfo>({
  selectId: (account) => account.id,
});

const initialState: IAccounnListReducerState = {
  status: 'IDLE',
  data: accountListAdapter.getInitialState({
    ids: [],
    entities: {},
  }),
};

const accountListSlice = createSlice({
  name: ACCOUNT_LIST_SLICE_NAME,
  initialState: initialState,
  reducers: {
    setAll(state, action) {
      accountListAdapter.setAll(state.data, action.payload.accountList);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAccountListAction.pending, (state) => {
        state.status = 'LOADING';
      })
      .addCase(getAccountListAction.fulfilled, (state, action) => {
        state.status = 'SUCCESS';
        state.bankId = action.meta.arg.bankId;
        const payload = action.payload as IGetAccountListResponse;
        state.pagination = payload.pagination;
        state.bankMetaData = payload.metaData;
        accountListAdapter.setAll(state.data, payload.accounts);
      })
      .addCase(getAccountListAction.rejected, (state) => {
        state.status = 'ERROR';
      });
  },
});

export const accountListSelectors = accountListAdapter.getSelectors<AppRootState>((state) => state.accountList.data);

export const { setAll } = accountListSlice.actions;

const accountListReducer = accountListSlice.reducer;
export default accountListReducer;
