import { DATE_FORMAT, FULL_DATETIME_FORMAT } from '@/constants/datetime';
import { IAccountFilterQuery, SORT_TYPE } from '@/types/common';
import { CalendarOutlined, SortDescendingOutlined } from '@ant-design/icons';
import { DatePicker, Input, Select } from 'antd';
import classNames from 'classnames';
import { Moment } from 'moment';
import React, { ReactNode } from 'react';
import s from './SearchAndFilterArea.module.scss';

const DEFAULT_SORT_OPTION = [
  {
    label: 'Date Descending',
    value: `transactionDate::${SORT_TYPE.DESC}`,
  },
  {
    label: 'Date Ascending',
    value: `transactionDate::${SORT_TYPE.ASC}`,
  },
];

function InputItem({ icon, className, children }: { icon?: ReactNode; className?: string; children: ReactNode }) {
  return (
    <div className={classNames(s.inputItemWrapper, className)}>
      {icon && <span>{icon}</span>}
      {children}
    </div>
  );
}

interface ISearchAndFilterAreaProps {
  isLoading?: boolean;
  filterQuery?: IAccountFilterQuery;
  onFilterChange?: (newFilterQuery: IAccountFilterQuery) => void;
}

function SearchAndFilterArea({ isLoading, filterQuery, onFilterChange }: ISearchAndFilterAreaProps) {
  const updateFilterQuery = (newQuery: IAccountFilterQuery) => {
    if (typeof onFilterChange === 'function') {
      onFilterChange(newQuery);
    }
  };

  const handleSearch = (value: string) => {
    const newValue = value.trim().toLowerCase();

    if (newValue !== (filterQuery?.search?.description || '')) {
      updateFilterQuery({
        ...filterQuery,
        search: {
          description: newValue,
        },
      });
    }
  };

  const handleDateChange = (values: [Moment | null, Moment | null] | null) => {
    const startTime = values?.[0]
      ? values[0].hour(0).minute(0).second(0).millisecond(0).format(FULL_DATETIME_FORMAT)
      : '';
    const endTime = values?.[1]
      ? values[1].hour(23).minute(59).second(59).millisecond(999).format(FULL_DATETIME_FORMAT)
      : '';

    updateFilterQuery({
      ...filterQuery,
      dateRange: {
        transactionDate: startTime && endTime ? [startTime, endTime] : undefined,
      },
    });
  };

  const handleSortChange = (value: string) => {
    const values = value.split('::');
    const sortField = values[0];
    const sortOrder = values[1] as SORT_TYPE;

    updateFilterQuery({
      ...filterQuery,
      sort: {
        field: sortField,
        order: sortOrder,
      },
    });
  };

  return (
    <div className={s.container}>
      <div className={s.leftArea}>
        <InputItem className={s.inputSearchItem}>
          <Input.Search
            disabled={isLoading}
            loading={isLoading}
            placeholder="Enter your search text"
            allowClear
            onSearch={handleSearch}
          />
        </InputItem>
      </div>

      <div className={s.rightArea}>
        <InputItem icon={<CalendarOutlined />}>
          <DatePicker.RangePicker disabled={isLoading} format={DATE_FORMAT} onChange={handleDateChange} />
        </InputItem>

        <InputItem icon={<SortDescendingOutlined />}>
          <Select
            placeholder="Sort by date"
            style={{ width: 150 }}
            disabled={isLoading}
            options={DEFAULT_SORT_OPTION}
            onChange={handleSortChange}
          />
        </InputItem>
      </div>
    </div>
  );
}

export default SearchAndFilterArea;
