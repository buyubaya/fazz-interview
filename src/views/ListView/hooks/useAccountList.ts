import { getAccountList } from '@/apis/accountList/getAccountList';
import { IGetAccountListResponse, IListAccountInfo } from '@/apis/accountList/types';
import { DEFAULT_BANK_ID } from '@/constants/bank';
import { DEFAULT_FILTER_QUERY } from '@/constants/common';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getAccountListAction } from '@/redux/slices/accountList/accountList.actions';
import {
  selectAccountList,
  selectAccountListIsLoading,
  selectAccountPagination,
} from '@/redux/slices/accountList/accountList.selectors';
import { IAccountFilterQuery, IPagination } from '@/types/common';
import { useEffect, useMemo, useState } from 'react';

export const useAccountList = () => {
  const appDispatch = useAppDispatch();

  // State for Account List at the first time entering
  const { defaultAcccountList, defaultPaginationData, isDefaultLoading } = useAppSelector((rootState) => ({
    defaultAcccountList: selectAccountList(rootState),
    defaultPaginationData: selectAccountPagination(rootState),
    isDefaultLoading: selectAccountListIsLoading(rootState),
  }));
  //

  // State for Account List when filtering
  const [accountList, setAccountList] = useState<IListAccountInfo[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filterQuery, setFilterQuery] = useState<IAccountFilterQuery>(DEFAULT_FILTER_QUERY);
  const [paginationData, setPaginationData] = useState<IPagination | null>(null); // used to stored new paginationInfo returned from API

  const combinedFilterQuery = useMemo(() => {
    const newData = { ...filterQuery };
    if (paginationData) {
      newData.pagination = {
        page: paginationData.page,
        pageSize: paginationData.pageSize,
      };
    }
    return newData;
  }, [filterQuery, paginationData]);
  //

  // HANDLERs
  const fetchNewAccountList = (newFilterQuery: IAccountFilterQuery) => {
    setIsLoading(true);
    setFilterQuery(newFilterQuery);

    getAccountList(DEFAULT_BANK_ID, newFilterQuery)
      .then((json) => {
        if (json.code !== 0) {
          setAccountList([]);
          return;
        }

        const jsonData = json.data as IGetAccountListResponse;

        setAccountList(jsonData.accounts || []);
        setPaginationData(jsonData.pagination);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //

  // INITIAL FETCH
  useEffect(() => {
    appDispatch(getAccountListAction({ bankId: DEFAULT_BANK_ID, filterQuery: combinedFilterQuery }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //

  return {
    accountList: accountList || defaultAcccountList,
    isLoading: isLoading || isDefaultLoading,

    paginationData: paginationData || defaultPaginationData,
    filterQuery: combinedFilterQuery,
    setFilterQuery: setFilterQuery,

    fetchNewAccountList,
  };
};
