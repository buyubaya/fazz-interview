import { bankInfoQueryApi } from './query';

export function getBankInfoReducerModule() {
  return {
    id: bankInfoQueryApi.reducerPath,
    reducerMap: {
      [bankInfoQueryApi.reducerPath]: bankInfoQueryApi.reducer,
    },
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
  };
}
