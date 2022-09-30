import AppBreadcrumb from '@/components/AppBreadcrumb';
import UserAvatar from '@/components/UserAvatar';
import { Layout } from 'antd';
import React from 'react';

import s from './AppHeader.module.scss';

function AppHeader() {
  return (
    <Layout.Header className={s.headerWrapper}>
      <AppBreadcrumb />

      <div className={s.rightArea}>
        <UserAvatar />
      </div>
    </Layout.Header>
  );
}

export default AppHeader;
