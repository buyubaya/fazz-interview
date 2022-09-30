import { AppRootState } from '@/redux/store';
import { accountDetailSelectors } from './accountDetail.slice';

export const selectAccountDetailById = (id: string) => (rootState: AppRootState) =>
  accountDetailSelectors.selectById(rootState, id);

export const selectAccountDetailisError = (id: string) => (rootState: AppRootState) =>
  rootState.accountDetail.statusMap[id] === 'ERROR';
