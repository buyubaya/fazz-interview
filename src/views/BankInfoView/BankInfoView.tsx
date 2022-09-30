import DetailInfoRow from '@/components/DetailInfoRow';
import { renderWithSkeleton } from '@/helpers/renderWithSkeleton';
import { withReducerModules } from '@/hocs/withReducerModules';
import { getBankInfoReducerModule } from '@/redux/query/bankInfo/bankInfo.module';
import { Card } from 'antd';
import React from 'react';
import { useBankInfo } from './hooks/useBankInfo';

function BankInfoView() {
  const { bankMetaData } = useBankInfo();

  const content = (
    <>
      <DetailInfoRow label="Title">{bankMetaData?.title}</DetailInfoRow>
      <DetailInfoRow label="Description">{bankMetaData?.desc}</DetailInfoRow>
      <DetailInfoRow label="Long Description">{bankMetaData?.longDesc}</DetailInfoRow>
    </>
  );

  return <Card title="Bank Info">{renderWithSkeleton(!!bankMetaData, content)}</Card>;
}

export default withReducerModules(getBankInfoReducerModule())(BankInfoView);
