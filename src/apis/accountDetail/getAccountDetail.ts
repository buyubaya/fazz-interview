import bankJson from '@/data/bank.json';
import { IApiResponse } from '../types';
import { IAccountDetail, IGetAccountDetailResponse } from './types';

// FAKE API
// because getDetail() should usually be handled another EndPoint
// DON'T lookup into AccountList API
export const getAccountDetail = async (
  accountId: string | number
): Promise<IApiResponse<IGetAccountDetailResponse>> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const accountDetail = bankJson.accounts.find((account) => account.id == accountId);

  if (!accountDetail) {
    return {
      code: 1,
      data: 'Not Found',
    };
  }

  return {
    code: 0,
    data: accountDetail as IAccountDetail,
  };
};
