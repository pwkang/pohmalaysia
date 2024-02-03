import React from 'react';
import Layout from '../../components/layout/layout';
import HeroSlider from '../../components/layout/HeroSlider';
import CurrentCommittee from '../../components/templates/committee/CurrentCommittee';
import CommitteeYouthGroup from '../../components/templates/committee/CommitteeYouthGroup';
import CommitteeWomenGroup from '../../components/templates/committee/CommitteeWomenGroup';

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

export default Page;
