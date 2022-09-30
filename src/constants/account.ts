import { IAccountDetail } from '@/apis/accountDetail/types';

export const ACCOUNT_FIELDS: (keyof IAccountDetail)[] = [
  'id',
  'transactionDate',
  'description',
  'category',
  'debit',
  'credit',
];

export const ACCOUNT_FIELD_LABELS = {
  id: 'ID',
  transactionDate: 'Transaction Date',
  description: 'Description',
  category: 'Category',
  debit: 'Debit',
  credit: 'Credit',
};
