import AccountListTable from '@/components/AccountListTable';
import CommonLayout from '@/components/CommonLayout/CommonLayout';
import SearchAndFilterArea from '@/components/SearchAndFilterArea';
import { IAccountFilterQuery } from '@/types/common';
import React from 'react';
import { useAccountList } from './hooks/useAccountList';
import s from './ListView.module.scss';

function ListView() {
  const { accountList, isLoading, paginationData, filterQuery, fetchNewAccountList } = useAccountList();

  const handleFilterChange = (newFilterQuery: IAccountFilterQuery) => {
    fetchNewAccountList(newFilterQuery);
  };

  return (
    <CommonLayout className={s.container}>
      <div className={s.searchArea}>
        <SearchAndFilterArea isLoading={isLoading} filterQuery={filterQuery} onFilterChange={handleFilterChange} />
      </div>

      <div className={s.tableArea}>
        <AccountListTable
          accountList={accountList}
          isLoading={isLoading}
          totalCount={paginationData?.totalCount}
          filterQuery={filterQuery}
          onFilterChange={handleFilterChange}
        />
      </div>
    </CommonLayout>
  );
}

export default ListView;
