import { ICommonBreadcrumbItem } from './components/CommonBreadcrumb/types';

export interface IAppReadcrumbConfigInfo {
  getBreadcrumbData: (params?: IGetBreadcrumbDataParams) => ICommonBreadcrumbItem[];
}

export interface IGetBreadcrumbDataParams {
  accountId?: string;
}
