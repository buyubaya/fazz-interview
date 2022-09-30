import { IListAccountInfo } from '@/apis/accountList/types';
import { DEFAULT_PAGESIZE } from '@/constants/common';
import { IAccountFilterQuery } from '@/types/common';
import { Pagination, Table } from 'antd';
import React from 'react';
import isEqual from 'react-fast-compare';
import s from './AccountListTable.module.scss';
import { useAccountTable } from './hooks/useAccountTable';

interface IAccountListTableProps {
  accountList: IListAccountInfo[];
  isLoading?: boolean;
  totalCount?: number;
  filterQuery?: IAccountFilterQuery;
  onFilterChange?: (newFilterQuery: IAccountFilterQuery) => void;
}

function AccountListTable({
  accountList = [],
  isLoading,
  totalCount,
  filterQuery,
  onFilterChange,
}: IAccountListTableProps) {
  const { columns } = useAccountTable();

  const updateFilter = (newFilterQuery: IAccountFilterQuery) => {
    if (typeof onFilterChange === 'function') {
      onFilterChange(newFilterQuery);
    }
  };

  const handlePageChange = (newPage: number, newPageSize: number) => {
    if (newPage && newPageSize) {
      const newQuery = { ...filterQuery };

      newQuery.pagination = {
        page: newPage,
        pageSize: newPageSize,
      };

      updateFilter(newQuery);
    }
  };

  return (
    <div className={s.container}>
      <div className={s.tableArea}>
        <Table
          loading={isLoading}
          columns={columns}
          dataSource={accountList}
          rowKey="id"
          pagination={false}
          sticky
          style={{
            minWidth: 768,
          }}
        />
      </div>

      {!!accountList?.length && (
        <div className={s.paginationWrapper}>
          <Pagination
            disabled={isLoading}
            defaultCurrent={1}
            current={filterQuery?.pagination?.page || 1}
            pageSize={filterQuery?.pagination?.pageSize || DEFAULT_PAGESIZE}
            total={totalCount || 0}
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}

export default React.memo(AccountListTable, isEqual);
