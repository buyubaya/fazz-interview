import { getBankInfo } from '@/apis/bankInfo/getBankInfo';
import { IGetBankInfoResponse } from '@/apis/bankInfo/types';
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';

const BANK_INFO_REDUCER_PATH = 'bankInfoQuery';

const baseQuery: BaseQueryFn<
  string, // Args
  unknown, // Result
  { reason: string }, // Error
  unknown, // DefinitionExtraOptions
  { timestamp: number } // Meta
> = async (arg) => {
  // `arg` has the type `string`
  // `api` has the type `BaseQueryApi` (not configurable)
  // `extraOptions` has the type `{ shout?: boolean }

  const meta = { timestamp: Date.now() };

  const response = await getBankInfo(arg);

  if (response?.code !== 0) {
    return {
      error: {
        reason: 'Not found',
        meta,
      },
    };
  }

  return { data: response.data, meta };
};

export const bankInfoQueryApi = createApi({
  reducerPath: BANK_INFO_REDUCER_PATH,
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getBankInfo: builder.query<IGetBankInfoResponse, string>({
      query: (bankId: string) => {
        return `getBankInfo(${bankId})`;
      },
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetBankInfoQuery } = bankInfoQueryApi;
