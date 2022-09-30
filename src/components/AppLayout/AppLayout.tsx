import { APP_ROUTES } from '@/constants/routes';
import { Layout } from 'antd';
import React, { useMemo } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import CommonLayout from '../CommonLayout/CommonLayout';
import s from './AppLayout.module.scss';
import AppHeader from './components/AppHeader';
import AppSider from './components/AppSider';

function AppLayout() {
  const location = useLocation();

  const isErrorRoute = useMemo(() => {
    return [APP_ROUTES.NOT_FOUND.getRoute()].includes(location.pathname);
  }, [location.pathname]);

  if (isErrorRoute) {
    return (
      <CommonLayout className={s.container}>
        <Outlet />
      </CommonLayout>
    );
  }

  return (
    <CommonLayout className={s.container}>
      <AppSider />

      <CommonLayout className={s.mainContentWrapper}>
        <AppHeader />

        <Layout.Content className={s.outletContentWrapper}>
          <Outlet />
        </Layout.Content>
      </CommonLayout>
    </CommonLayout>
  );
}

export default AppLayout;
