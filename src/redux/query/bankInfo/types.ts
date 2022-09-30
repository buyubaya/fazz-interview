import { IGetBankInfoResponse } from '@/apis/bankInfo/types';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import { QueryDefinition } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

export interface IBankInfoQuery {
  getBankInfo: QueryDefinition<string, BaseQueryFn, string, IGetBankInfoResponse, string>;
}
