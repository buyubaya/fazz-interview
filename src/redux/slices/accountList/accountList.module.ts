import accountListReducer, { ACCOUNT_LIST_SLICE_NAME } from './accountList.slice';

export function getAccountListReducerModule() {
  return {
    id: ACCOUNT_LIST_SLICE_NAME,
    reducerMap: {
      [ACCOUNT_LIST_SLICE_NAME]: accountListReducer,
    },
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
  };
}
