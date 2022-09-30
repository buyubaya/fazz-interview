import accountDetailReducer, { ACCOUNT_DETAIL_SLICE_NAME } from './accountDetail.slice';

export function getAccountDetailReducerModule() {
  return {
    id: ACCOUNT_DETAIL_SLICE_NAME,
    reducerMap: {
      [ACCOUNT_DETAIL_SLICE_NAME]: accountDetailReducer,
    },
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
  };
}
