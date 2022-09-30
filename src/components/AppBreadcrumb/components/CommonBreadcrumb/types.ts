export interface ICommonBreadcrumbProps {
  data: ICommonBreadcrumbItem[];
}

export interface ICommonBreadcrumbItem {
  key: string;
  label?: string;
  href?: string;
  isActive?: boolean;
}
