import { AppRootState } from '@/redux/store';
import { accountListSelectors } from './accountList.slice';

export const selectAccountList = (rootState: AppRootState) => accountListSelectors.selectAll(rootState);

export const selectAccountPagination = (rootState: AppRootState) => rootState.accountList.pagination;

export const selectAccountListIsLoading = (rootState: AppRootState) => rootState.accountList.status === 'LOADING';

export const selectAccountListIsSuccess = (rootState: AppRootState) => rootState.accountList.status === 'SUCCESS';

export const selectBankMetaData = (rootState: AppRootState) => rootState.accountList.bankMetaData;
