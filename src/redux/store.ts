import { Action, AnyAction, Dispatch, getDefaultMiddleware, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { createStore } from 'redux-dynamic-modules';
import { getBankInfoReducerModule } from './query/bankInfo/bankInfo.module';
import { bankInfoQueryApi } from './query/bankInfo/query';
import { IBankInfoQuery } from './query/bankInfo/types';
import { IAccounnDetailReducerState } from './slices/accountDetail/types';
import { getAccountListReducerModule } from './slices/accountList/accountList.module';
import { IAccounnListReducerState } from './slices/accountList/types';

const defaultMiddlewares = getDefaultMiddleware();

export const store = createStore(
  {
    initialState: {
      /** initial state */
    },
    enhancers: [
      /** enhancers to include */
    ],
    extensions: [
      /** extensions to include i.e. getSagaExtension(), getThunkExtension() */
      {
        middleware: defaultMiddlewares.concat(bankInfoQueryApi.middleware),
      },
    ],
  },
  getAccountListReducerModule(),
  getBankInfoReducerModule()
  /* ...any additional modules */
);

export type AppDispatch = ThunkDispatch<AppRootState, null, AnyAction> &
  ThunkDispatch<AppRootState, undefined, AnyAction> &
  Dispatch<AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, Action<string>>;

export interface AppRootState {
  accountList: IAccounnListReducerState;
  accountDetail: IAccounnDetailReducerState;
  bankInfoQuery: IBankInfoQuery;
}
