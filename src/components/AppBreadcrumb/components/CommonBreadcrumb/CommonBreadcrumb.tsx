import { Breadcrumb } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { ICommonBreadcrumbProps } from './types';

function CommonBreadcrumb({ data }: ICommonBreadcrumbProps) {
  return (
    <Breadcrumb>
      {data.map((item) => {
        if (!item.href) {
          return <Breadcrumb.Item key={item.key}>{item.label}</Breadcrumb.Item>;
        }

        return (
          <Breadcrumb.Item key={item.key}>
            <Link to={item.href}>{item.label}</Link>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}

export default CommonBreadcrumb;
