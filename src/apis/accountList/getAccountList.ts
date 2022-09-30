import { DEFAULT_PAGESIZE } from '@/constants/common';
import { DATE_FORMAT, FULL_DATETIME_FORMAT } from '@/constants/datetime';
import bankJson from '@/data/bank.json';
import { formatUtcTime, localTimeToUtc } from '@/helpers/datetime';
import { IAccountFilterQuery, SORT_TYPE } from '@/types/common';
import { IApiResponse } from '../types';
import { IGetAccountListResponse, IListAccountInfo } from './types';

// FAKE API including [Filter + Sort + Pagination]
// because [Filter + Sort + Pagination] should usually be handled in Back-End side, NOT Front-End side
// SHOULD NOT f[Filter + Sort + Pagination] in Front-End Side
export const getAccountList = async (
  bankId: string,
  filterQuery?: IAccountFilterQuery
): Promise<IApiResponse<IGetAccountListResponse>> => {
  // Transform request before sending to Back-End
  const transformedFilterQuery = { ...filterQuery };

  const searchQuery = { ...transformedFilterQuery.search };
  if (searchQuery.description) {
    searchQuery.description = searchQuery.description.trim().toLowerCase();
    transformedFilterQuery.search = searchQuery;
  }

  const dateRangeQuery = { ...transformedFilterQuery.dateRange };
  if (dateRangeQuery.transactionDate && dateRangeQuery.transactionDate.length) {
    const startTime = localTimeToUtc(
      dateRangeQuery.transactionDate?.[0] || '',
      FULL_DATETIME_FORMAT,
      FULL_DATETIME_FORMAT
    );
    const endTime = localTimeToUtc(
      dateRangeQuery.transactionDate?.[1] || '',
      FULL_DATETIME_FORMAT,
      FULL_DATETIME_FORMAT
    );
    dateRangeQuery.transactionDate = [startTime, endTime];
    transformedFilterQuery.dateRange = dateRangeQuery;
  }
  //

  // SIMULATE Back-End Tasks
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (typeof bankId === 'undefined') {
    return {
      code: 1,
      data: 'Not Found',
    };
  }

  let newData = bankJson.accounts as IListAccountInfo[];
  const pagination = {
    page: transformedFilterQuery?.pagination?.page || 1,
    pageSize: transformedFilterQuery?.pagination?.pageSize || DEFAULT_PAGESIZE,
    totalCount: newData.length,
  };

  if (transformedFilterQuery) {
    // Filter by search
    if (transformedFilterQuery.search?.description) {
      newData = newData.filter((account) =>
        account.description.toLowerCase().includes(transformedFilterQuery.search?.description || '')
      );
    }

    // Filter by DateRange
    if (transformedFilterQuery.dateRange?.transactionDate) {
      const startTime = transformedFilterQuery.dateRange?.transactionDate?.[0] || '';
      const endTime = transformedFilterQuery.dateRange?.transactionDate?.[1] || '';

      if (startTime && endTime) {
        newData = newData.filter((account) => {
          const transactionDate = formatUtcTime(account.transactionDate, DATE_FORMAT, FULL_DATETIME_FORMAT);
          if (startTime <= transactionDate && transactionDate <= endTime) {
            return true;
          }
          return false;
        });
      }
    }

    // Sorter
    const sortField = transformedFilterQuery.sort?.field as keyof IListAccountInfo;
    const sortOrder = transformedFilterQuery.sort?.order;
    if (sortField && sortOrder) {
      const sortDirectionMap = {
        [SORT_TYPE.DESC]: -1,
        [SORT_TYPE.ASC]: 1,
      };
      newData.sort((a, b) => {
        const valueA = a[sortField];
        const valueB = b[sortField];
        let sort = 0;

        if (typeof valueA === 'undefined' || valueA === null) {
          sort = 1;
        } else if (typeof valueB === 'undefined' || valueB === null) {
          sort = -1;
        } else if (valueA < valueB) {
          sort = -1;
        } else if (valueA > valueB) {
          sort = 1;
        }

        return sort * sortDirectionMap[sortOrder];
      });
    }

    // Paging
    if (transformedFilterQuery.pagination) {
      pagination.totalCount = newData.length;

      let pageCount = Math.floor(pagination.totalCount / (pagination.pageSize || 1));
      if (pagination.totalCount % pagination.pageSize !== 0) {
        pageCount += 1;
      }

      pagination.page = Math.min(transformedFilterQuery.pagination.page, pageCount);
      pagination.page = Math.max(pagination.page, 1);

      newData = newData.slice((pagination.page - 1) * pagination.pageSize, pagination.page * pagination.pageSize);
    } else {
      pagination.totalCount = newData.length;
    }
  }
  //

  return {
    code: 0,
    data: {
      metaData: bankJson.metaData,
      accounts: newData,
      pagination: pagination,
    } as IGetAccountListResponse,
  };
};
