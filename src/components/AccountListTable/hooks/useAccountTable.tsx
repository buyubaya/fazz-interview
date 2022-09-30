import { IListAccountInfo } from '@/apis/accountList/types';
import { DATE_FORMAT } from '@/constants/datetime';
import { utcToLocalTime } from '@/helpers/datetime';
import { renderWithFallback } from '@/helpers/renderWithFallback';
import { EyeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import { Link } from 'react-router-dom';

export const useAccountTable = () => {
  const columns: ColumnsType<IListAccountInfo> = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: renderWithFallback(),
      ellipsis: true,
      width: 70,
      fixed: 'left',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      render: renderWithFallback(),
      ellipsis: true,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      render: renderWithFallback(),
      ellipsis: true,
    },
    {
      title: 'Debit',
      dataIndex: 'debit',
      render: renderWithFallback(),
      ellipsis: true,
    },
    {
      title: 'Credit',
      dataIndex: 'credit',
      render: renderWithFallback(),
      ellipsis: true,
    },
    {
      title: 'Transaction Date',
      dataIndex: 'transactionDate',
      render: (value) => {
        return renderWithFallback()(utcToLocalTime(value || '', DATE_FORMAT, DATE_FORMAT));
      },
      // sorter: (a, b) => {
      //   if (a.transactionDate === b.transactionDate) {
      //     return 0;
      //   } else if (a.transactionDate < b.transactionDate) {
      //     return -1;
      //   } else {
      //     return 1;
      //   }
      // },
      // sortOrder: sortInfo?.field === 'transactionDate' ? apiSortOrderToAntdSortOrder(sortInfo?.order) : null,
      ellipsis: true,
    },
    {
      title: '',
      dataIndex: 'id',
      width: 70,
      render: (value) => {
        return (
          <div style={{ textAlign: 'right' }}>
            <Link to={`/accounts/${value}`}>
              <Button icon={<EyeOutlined />} type="link" />
            </Link>
          </div>
        );
      },
    },
  ];

  return {
    columns: columns,
  };
};
