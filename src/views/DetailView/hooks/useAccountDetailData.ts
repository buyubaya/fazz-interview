import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getAccountDetailAction } from '@/redux/slices/accountDetail/accountDetail.actions';
import {
  selectAccountDetailById,
  selectAccountDetailisError,
} from '@/redux/slices/accountDetail/accountDetail.selectors';
import { useEffect } from 'react';

export const useAccountDetailData = (accountId: string) => {
  const appDispatch = useAppDispatch();

  const { accountDetail, isError } = useAppSelector((rootState) => ({
    accountDetail: selectAccountDetailById(accountId)(rootState),
    isError: selectAccountDetailisError(accountId)(rootState),
  }));

  useEffect(() => {
    appDispatch(getAccountDetailAction({ accountId: accountId }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accountId]);

  return {
    accountDetail: accountDetail,
    isError,
  };
};
