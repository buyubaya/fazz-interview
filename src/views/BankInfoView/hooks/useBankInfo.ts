import { DEFAULT_BANK_ID } from '@/constants/bank';
import { useGetBankInfoQuery } from '@/redux/query/bankInfo/query';

export const useBankInfo = () => {
  const { data, isLoading } = useGetBankInfoQuery(DEFAULT_BANK_ID);

  return {
    bankMetaData: data,
    isLoading: isLoading,
  };
};
