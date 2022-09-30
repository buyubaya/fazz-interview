import React, { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import s from './AppBreadcrumb.module.scss';
import CommonBreadcrumb from './components/CommonBreadcrumb';
import { getBreadcrumbByPath } from './helpers/getBreadcrumbByPath';

function AppBreadcrumb() {
  const location = useLocation();
  const routeParams = useParams();

  const breadcrumbData = useMemo(() => {
    const beadcrumb = getBreadcrumbByPath(location.pathname);
    return beadcrumb ? beadcrumb.getBreadcrumbData({ accountId: routeParams.accountId }) : [];
  }, [location.pathname, routeParams.accountId]);

  return (
    <div className={s.container}>
      <CommonBreadcrumb data={breadcrumbData} />
    </div>
  );
}

export default AppBreadcrumb;
