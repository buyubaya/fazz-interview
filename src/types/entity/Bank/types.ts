export interface IBankMetaData {
  categories: BankCategory[];
  desc: string;
  featured: boolean;
  longDesc: string;
  title: string;
}

export type BankCategory = string;
