import React from 'react';
import Layout from '../../components/layout/layout';
import HeroSlider from '../../components/layout/HeroSlider';
import CurrentCommittee from '../../components/templates/committee/CurrentCommittee';
import CommitteeYouthGroup from '../../components/templates/committee/CommitteeYouthGroup';
import CommitteeWomenGroup from '../../components/templates/committee/CommitteeWomenGroup';
import { Metadata } from 'next';
import { defaultMetadata } from '@lib/default-metadata';

function Page() {
  return (
    <Layout>
      <HeroSlider />
      <CurrentCommittee />
      <CommitteeYouthGroup />
      <CommitteeWomenGroup />
    </Layout>
  );
}

export const metadata: Metadata = {
  ...defaultMetadata,
  title: '组织结构 | 马来西亚傅氏总会',
};

export default Page;
