import { APP_ROUTES } from '@/constants/routes';
import BankInfoView from '@/views/BankInfoView';
import DetailView from '@/views/DetailView';
import ErrorView from '@/views/ErrorView';
import ListView from '@/views/ListView';
import UserInfoView from '@/views/UserInfoView';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from '../AppLayout';
import RedirectRoute from './comnponents/RedirectRoute';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<RedirectRoute to={APP_ROUTES.ACCOUNT_LIST.path} />} />

          <Route path={APP_ROUTES.BANK_INFO.path} element={<BankInfoView />} />

          <Route path={APP_ROUTES.ACCOUNT_LIST.path} element={<ListView />} />
          <Route path={APP_ROUTES.ACCOUNT_DETAIL.path} element={<DetailView />} />

          <Route path={APP_ROUTES.USER_INFO.path} element={<UserInfoView />} />

          <Route path={APP_ROUTES.NOT_FOUND.path} element={<ErrorView />} />
        </Route>

        <Route path="*" element={<RedirectRoute to={APP_ROUTES.NOT_FOUND.path} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
