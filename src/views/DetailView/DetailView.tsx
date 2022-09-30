import RedirectRoute from '@/components/AppRoutes/comnponents/RedirectRoute';
import DetailInfoRow from '@/components/DetailInfoRow';
import { ACCOUNT_FIELD_LABELS } from '@/constants/account';
import { DATE_FORMAT } from '@/constants/datetime';
import { APP_ROUTES } from '@/constants/routes';
import { utcToLocalTime } from '@/helpers/datetime';
import { renderWithFallback } from '@/helpers/renderWithFallback';
import { renderWithSkeleton } from '@/helpers/renderWithSkeleton';
import { withReducerModules } from '@/hocs/withReducerModules';
import { getAccountDetailReducerModule } from '@/redux/slices/accountDetail/accountDetail.module';
import { Card } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAccountDetailData } from './hooks/useAccountDetailData';

function DetailView() {
  const routeParams = useParams();
  const { accountDetail, isError } = useAccountDetailData(routeParams.accountId || '');

  const content = (
    <>
      <DetailInfoRow label={ACCOUNT_FIELD_LABELS.id}>{accountDetail?.id}</DetailInfoRow>
      <DetailInfoRow label={ACCOUNT_FIELD_LABELS.transactionDate}>
        {renderWithFallback()(utcToLocalTime(accountDetail?.transactionDate || '', DATE_FORMAT, DATE_FORMAT))}
      </DetailInfoRow>
      <DetailInfoRow label={ACCOUNT_FIELD_LABELS.description}>{accountDetail?.description}</DetailInfoRow>
      <DetailInfoRow label={ACCOUNT_FIELD_LABELS.debit}>{accountDetail?.debit}</DetailInfoRow>
      <DetailInfoRow label={ACCOUNT_FIELD_LABELS.credit}>{accountDetail?.credit}</DetailInfoRow>
    </>
  );

  if (isError) {
    return <RedirectRoute to={APP_ROUTES.NOT_FOUND.getRoute()} />;
  }

  return <Card title="Bank Account Details">{renderWithSkeleton(!!accountDetail, content)}</Card>;
}

export default withReducerModules(getAccountDetailReducerModule())(DetailView);
