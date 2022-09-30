import { DateString, Id } from '../../common';
import { ACCOUNT_CATEGORY } from './enums';

export interface IAccount {
  id: Id;
  transactionDate: DateString; // YYYY-MM-DD in UTC
  description: string;
  category: ACCOUNT_CATEGORY;
  debit: number;
  credit: number | null;
}
