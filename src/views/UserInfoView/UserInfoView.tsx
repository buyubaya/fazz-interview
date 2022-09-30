import DetailInfoRow from '@/components/DetailInfoRow';
import { renderWithSkeleton } from '@/helpers/renderWithSkeleton';
import { Card } from 'antd';
import React from 'react';

function UserInfoView() {
  const userInfo = {
    id: '2',
    name: 'Hieu Le',
    title: 'Front-End Developer',
  };

  const content = (
    <>
      <DetailInfoRow label="ID">{userInfo.id}</DetailInfoRow>
      <DetailInfoRow label="Name">{userInfo.name}</DetailInfoRow>
      <DetailInfoRow label="Title">{userInfo.title}</DetailInfoRow>
    </>
  );

  return <Card title="User Info">{renderWithSkeleton(!!userInfo, content)}</Card>;
}

export default UserInfoView;
