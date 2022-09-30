import { Skeleton } from 'antd';
import React, { ReactNode } from 'react';
import s from './DetailInfoRow.module.scss';

interface IDetailInfoRowProps {
  label: string;
  children?: ReactNode;
  isLoading?: boolean;
}

function DetailInfoRow({ label, children, isLoading }: IDetailInfoRowProps) {
  if (isLoading) {
    return (
      <div className={s.detailInfoRow}>
        <div className={s.detailInfoLabel}>{label}</div>
        <div className={s.detailInfoContent}>
          <Skeleton active title={false} paragraph={{ rows: 1 }} />
        </div>
      </div>
    );
  }

  return (
    <div className={s.detailInfoRow}>
      <div className={s.detailInfoLabel}>{label}</div>
      <div className={s.detailInfoContent}>{children || '-'}</div>
    </div>
  );
}

export default DetailInfoRow;
