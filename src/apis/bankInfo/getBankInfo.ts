import bankJson from '@/data/bank.json';
import { IApiResponse } from '../types';
import { IGetBankInfoResponse } from './types';

// FAKE API to Get Bank Info
export const getBankInfo = async (bankId: string | number): Promise<IApiResponse<IGetBankInfoResponse>> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const bankMetaData = bankJson.metaData;

  if (typeof bankId === 'undefined' || !bankMetaData) {
    return {
      code: 1,
      data: 'Not Found',
    };
  }

  return {
    code: 0,
    data: bankMetaData[0],
  };
};
